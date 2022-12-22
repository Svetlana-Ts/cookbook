const cardsRouter = require('express').Router();
const { Card: CardModel } = require('../db/models');
const Main = require('../views/Main');
const Recipe = require('../views/Recipe');
const Error = require('../views/Error');

cardsRouter.get('/', async (req, res) => {
  try {
    const cards = await CardModel.findAll();
    let isAuth = false;
    if (req.session.userId) {
      isAuth = true;
      res.renderComponent(Main, { isAuth, cards });
    }
    res.renderComponent(Main, { isAuth, cards });
  } catch (error) {
    res.status(500);
    res.renderComponent(Error, { error });
  }
  res.end();
});

cardsRouter.get('/:id', async (req, res) => {
  const cardId = req.params.id;
  const card = await CardModel.findOne({
    where: { id: cardId },
  });
  res.renderComponent(Recipe, { card });
});

module.exports = cardsRouter;
