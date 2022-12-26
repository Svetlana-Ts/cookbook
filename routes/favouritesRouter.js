const favouritesRouter = require('express').Router();
const { Card: CardModel, User } = require('../db/models');
const Error = require('../public/views/Error');
const CardList = require('../public/views/CardList');

favouritesRouter.get('/', async (req, res) => {
  const { baseUrl } = req;
  try {
    let isAuth = false;
    if (req.session.userId) {
      isAuth = true;
      const user = await User.findByPk(Number(req.session.userId));
      const userLogin = user.login;
      const cards = await User.findAll({
        include: User.Cards,
        where: { id: req.session.userId },
      });
      res.renderComponent(CardList, {
        isAuth,
        cards: cards[0].cards,
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
    const user = await User.findByPk(Number(req.session.userId));
    user.addCard(card);
    user.save();
    res.redirect('/');
  } catch (error) {
    res.renderComponent(Error, { error });
  }
});

module.exports = favouritesRouter;
