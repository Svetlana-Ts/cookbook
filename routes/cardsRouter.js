const cardsRouter = require('express').Router();
const { Card: CardModel, User } = require('../db/models');
const Main = require('../views/Main');
const Recipe = require('../views/Recipe');
const Error = require('../views/Error');

cardsRouter.get('/', async (req, res) => {
  try {
    const user = await User.findByPk(req.session.userId);
    let userLogin = '';
    if (user) {
      userLogin = user.login;
    }
    const cards = await CardModel.findAll();
    let isAuth = false;
    if (req.session.userId) {
      isAuth = true;
    }
    res.renderComponent(Main, { isAuth, cards, userLogin });
  } catch (error) {
    console.error(error);
    res.status(500);
    res.renderComponent(Error, { error });
  }
  res.end();
});

cardsRouter.get('/:id', async (req, res) => {
  try {
    let isAuth = false;
    if (req.session.userId) {
      isAuth = true;
    }
    const cardId = req.params.id;
    const card = await CardModel.findOne({
      where: { id: cardId },
    });
    res.renderComponent(Recipe, { isAuth, card });
  } catch (error) {
    res.status(500);
    res.renderComponent(Error, { error });
  }
  res.end();
});

module.exports = cardsRouter;
