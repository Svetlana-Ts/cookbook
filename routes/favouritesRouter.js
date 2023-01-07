const favouritesRouter = require('express').Router();
const { Card: CardModel, User } = require('../db/models');
const Error = require('../public/views/Error');
const CardList = require('../public/views/CardList');
const Like = require('../public/views/Like');

favouritesRouter.get('/', async (req, res) => {
  const { baseUrl } = req;
  const colName = req.query.order !== undefined ? req.query.order : 'id';
  const sortBy = req.query.sort !== undefined ? req.query.sort : 'ASC';
  const { userId } = req.session;

  try {
    let isAuth = false;
    if (req.session.userId) {
      isAuth = true;

      const user = await User.findByPk(Number(userId));
      const userLogin = user.login;

      let allCards;
      try {
        allCards = await CardModel.findAll({
          include: CardModel.Users,
          order: [[colName, sortBy]],
        });
      } catch (error) {
        res.renderComponent(Error, { error });
      }

      const cards = [];
      allCards.forEach((card) =>
        card.users.forEach((user) => {
          if (user.id === userId) {
            cards.push(card);
          }
        }),
      );

      res.renderComponent(CardList, {
        isAuth,
        cards,
        userLogin,
        baseUrl,
        userId,
        colName,
        sortBy,
      });
    }
  } catch (error) {
    res.renderComponent(Error, { error });
  }
  res.end();
});

favouritesRouter.get('/:id', async (req, res) => {
  const { userId } = req.session;

  try {
    const card = await CardModel.findOne({
      where: { id: Number(req.params.id) },
      include: CardModel.Users,
    });

    const user = await User.findOne({
      where: { id: Number(userId) },
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

    res.renderComponent(Like, { card, userId });
  } catch (error) {
    res.renderComponent(Error, { error });
  }
});

module.exports = favouritesRouter;
