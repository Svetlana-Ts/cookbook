const favouritesRouter = require('express').Router();
const { Card: CardModel, User } = require('../db/models');
const Error = require('../public/views/Error');
const CardList = require('../public/views/CardList');

favouritesRouter.get('/', async (req, res) => {
  const { baseUrl } = req;
  const colName = req.query.order;
  const sortBy = req.query.sort;

  try {
    let isAuth = false;
    if (req.session.userId) {
      isAuth = true;

      const user = await User.findByPk(Number(req.session.userId));
      const userLogin = user.login;
      let allCards = await CardModel.findAll({ include: CardModel.Users });

      const cards = [];
      allCards.forEach((card) =>
        card.users.forEach((user) => {
          if (user.id === req.session.userId) {
            cards.push(card);
          }
        }),
      );

      // let allCards = await User.findAll({
      //   include: User.Cards,
      //   where: { id: req.session.userId },
      // });

      if (req.query.order) {
        if (sortBy === 'ASC') {
          cards.sort((card1, card2) => card1[colName] - card2[colName]);
        } else {
          cards.sort((card1, card2) => card2[colName] - card1[colName]);
        }
      }

      res.renderComponent(CardList, {
        isAuth,
        cards,
        userLogin,
        baseUrl,
      });
    }
  } catch (error) {
    res.renderComponent(Error, { error });
  }
  res.end();
});

favouritesRouter.get('/:id', async (req, res) => {
  try {
    const card = await CardModel.findByPk(Number(req.params.id));
    const user = await User.findOne({
      where: { id: Number(req.session.userId) },
      include: User.Cards,
    });

    let userHasCard = false;

    user.cards.forEach((item) => {
      if (item.dataValues.id === card.dataValues.id) {
        userHasCard = true;
      }
      return userHasCard;
    });

    if (userHasCard) {
      user.removeCard(card);
      user.save();
    } else {
      user.addCard(card);
      user.save();
    }

    res.redirect('/');
  } catch (error) {
    res.renderComponent(Error, { error });
  }
});

module.exports = favouritesRouter;
