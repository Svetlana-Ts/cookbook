const cardsRouter = require('express').Router();
const Main = require('../views/Main');

cardsRouter.get('/', (req, res) => {
  res.renderComponent(Main);
});

module.exports = cardsRouter;
