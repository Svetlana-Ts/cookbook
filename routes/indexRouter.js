const indexRouter = require('express').Router();

indexRouter.get('/', (req, res) => {
  res.redirect('/cards');
});

module.exports = indexRouter;
