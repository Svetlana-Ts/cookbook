const cardsRouter = require('express').Router();
const Main = require('../views/Main');
const { Card: CardModel } = require('../db/models');
const Recipe = require('../views/Recipe');

cardsRouter.get('/', async (req, res) => {
  const cards = await CardModel.findAll();
  let isAuth = false;
  if (req.session.userId) {
    isAuth = true;
    res.renderComponent(Main, { isAuth, cards });
  }
  res.renderComponent(Main, { isAuth, cards });
});

cardsRouter.get('/:id', (req, res) => {
  res.renderComponent(Recipe);
});

module.exports = cardsRouter;
