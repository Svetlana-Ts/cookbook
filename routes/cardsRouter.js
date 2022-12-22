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
    } else {
      res.renderComponent(Main, { isAuth, cards });
    }
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
