const cardsRouter = require('express').Router();
const { Card: CardModel, User } = require('../db/models');
const Recipe = require('../public/views/Recipe');
const Error = require('../public/views/Error');
const CardList = require('../public/views/CardList');

cardsRouter.get('/', async (req, res) => {
  const { baseUrl } = req;
  const colName = req.query.order !== undefined ? req.query.order : 'id';
  const sortBy = req.query.sort !== undefined ? req.query.sort : 'ASC';

  try {
    const user = await User.findByPk(req.session.userId);
    let userLogin = '';
    if (user) {
      userLogin = user.login;
    }

    let offset = Number(req.query.offset) || 0;
    const limit = 8;

    const cards = await CardModel.findAll({
      include: CardModel.Users,
      order: [[colName, sortBy]],
      offset,
      limit,
    });

    const allCards = await CardModel.findAll();
    const maxCount = allCards.length;

    let isAuth = false;
    if (req.session.userId) {
      isAuth = true;
    }

    res.renderComponent(CardList, {
      isAuth,
      cards,
      userLogin,
      baseUrl,
      offset,
      userId: req.session.userId,
      colName,
      sortBy,
      maxCount,
    });
  } catch (error) {
    console.error(error);
    res.status(500);
    res.renderComponent(Error, { error });
  }
  res.end();
});

cardsRouter.get('/:id', async (req, res) => {
  try {
    const user = await User.findByPk(req.session.userId);
    let userLogin = '';
    if (user) {
      userLogin = user.login;
    }

    let isAuth = false;
    if (req.session.userId) {
      isAuth = true;
    }

    const cardId = req.params.id;
    const card = await CardModel.findOne({
      where: { id: cardId },
      include: CardModel.Users,
    });
    res.renderComponent(Recipe, {
      isAuth,
      card,
      userId: req.session.userId,
      userLogin,
    });
  } catch (error) {
    res.status(500);
    res.renderComponent(Error, { error });
  }
  res.end();
});

module.exports = cardsRouter;
