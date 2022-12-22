const recipeRouter = require('express').Router();
const Recipe = require('../views/Recipe');

recipeRouter.get('/', (req, res) => {
  res.renderComponent(Recipe, {});
});

module.exports = recipeRouter;
