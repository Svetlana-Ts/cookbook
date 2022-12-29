const cardsRouter = require('express').Router();
const { Card: CardModel, User } = require('../db/models');
const Recipe = require('../public/views/Recipe');
const Error = require('../public/views/Error');
const CardList = require('../public/views/CardList');

cardsRouter.get('/', async (req, res) => {
  const { baseUrl } = req;
  const colName = req.query.order;
  const sortBy = req.query.sort;

  try {
    const user = await User.findByPk(req.session.userId);
    let userLogin = '';
    if (user) {
      userLogin = user.login;
    }

    let cards;

    if (req.query.order) {
      cards = await CardModel.findAll({
        order: [[colName, sortBy]],
      });
    } else {
      cards = await CardModel.findAll();
    }

    let isAuth = false;
    if (req.session.userId) {
      isAuth = true;
    }

    res.renderComponent(CardList, { isAuth, cards, userLogin, baseUrl });
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
