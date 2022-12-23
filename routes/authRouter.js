const bcrypt = require('bcrypt');
const authRouter = require('express').Router();
const Login = require('../views/Login');
const Registration = require('../views/Registration');
const Error = require('../views/Error');
const { User } = require('../db/models');

authRouter.get('/login', (req, res) => {
  res.renderComponent(Login);
});

authRouter.post('/login', async (req, res) => {
  const isEmail = Boolean(req.body.email.trim());
  const isPassword = Boolean(req.body.password);

  if (!isEmail || !isPassword) {
    res.status(400).renderComponent(Error, {
      error: { message: 'Введите логин или пароль!' },
    });
  }

  let user;

  try {
    user = await User.findOne({ where: { email: req.body.email } });
  } catch (error) {
    res.status(500).renderComponent(Error, { error });
  }

  if (!user) {
    res.status(400).renderComponent(Error, {
      error: { message: 'Неверный логин или пароль!' },
    });
  }

  const rawPassword = req.body.password;
  const hashedPassword = user.password;
  let isSame;

  try {
    isSame = await bcrypt.compare(rawPassword, hashedPassword);
  } catch (error) {
    res.status(500).renderComponent(Error, {
      error,
    });
  }

  if (!isSame) {
    res.status(400).renderComponent(Error, {
      error: { message: 'Неверный логин или пароль!' },
    });
  }

  req.session.userId = user.id;

  res.redirect('/');
});

authRouter.get('/register', (req, res) => {
  res.renderComponent(Registration);
});

authRouter.post('/register', async (req, res) => {
  const rawPassword = req.body.password;
  let hashedPassword;

  try {
    hashedPassword = await bcrypt.hash(rawPassword, 11);
  } catch (error) {
    res.status(500).json({ error: error.message });
    return;
  }

  let user;

  try {
    user = await User.create({
      login: req.body.login,
      email: req.body.email,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    req.session.userId = user.id;

    res.redirect('/');
  } catch (error) {
    res.status(500).json('Не удалось зарегистрироваться.');
  }
});

authRouter.get('/logout', (req, res) => {
  const { userId } = req.session;

  if (userId) {
    try {
      req.session.destroy();
      res.clearCookie('user_sid');
      res.redirect('/');
    } catch (error) {
      res.status(500).json('Ошибка при выходе');
      return;
    }
  }
  res.redirect('/');
});

module.exports = authRouter;
