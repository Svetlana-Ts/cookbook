const React = require('react');
const Layout = require('./Layout');
// const Main = require('./Main');

module.exports = function Login() {
  return (
    <Layout>
      <h1>Регистрация</h1>
      <form method="post" action="/auth/register">
        <label htmlFor="emailInput">Почта</label>
        <input type="email" id="emailInput" name="email" />

        <label htmlFor="loginInput">Логин</label>
        <input type="text" id="loginInput" name="login" />

        <label htmlFor="passwordInput">Пароль</label>
        <input type="password" id="passwordInput" name="password" />

        <button type="submit">Зарегистрироваться</button>
      </form>
    </Layout>
  );
};
