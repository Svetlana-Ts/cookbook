const cardsRouter = require('express').Router();
const Main = require('../views/Main');

cardsRouter.get('/', (req, res) => {
  let isAuth = false;
  if (req.session.userId) {
    isAuth = true;
    res.renderComponent(Main, { isAuth });
  }
  res.renderComponent(Main, { isAuth });
});

module.exports = cardsRouter;
