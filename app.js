require('dotenv').config();
require('@babel/register');

const express = require('express');
const logger = require('morgan');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const path = require('path');
const ssr = require('./middleware/ssr');
const indexRouter = require('./routes/indexRouter');
const authRouter = require('./routes/authRouter');
const cardsRouter = require('./routes/cardsRouter');
const favouritesRouter = require('./routes/favouritesRouter');

const app = express();
const PORT = process.env.PORT || 3000;

const sessionConfig = {
  store: new FileStore(),
  name: 'user_sid',
  secret: process.env.SESSION_SECRET ?? 'test',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 12,
    httpOnly: true,
  },
};

app.use(ssr);
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));

app.use('/', indexRouter);
app.use('/cards', cardsRouter);
app.use('/auth', authRouter);
app.use('/favourites', favouritesRouter);

app
  .listen(PORT)
  .on('error', (error) => {
    console.log('Ошибка при подключении сервера: ', error.message);
  })
  .on('listening', () => {
    console.log(`Сервер успешно подключен к порту ${PORT}`);
  });
