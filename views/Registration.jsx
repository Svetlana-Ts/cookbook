const React = require('react');
const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <h1>Регистрация</h1>
      <form action="/auth/register">
        <label htmlFor="emailInput">Почта</label>
        <input type="email" id="emailInput" name="email" />

        <label htmlFor="loginInput">Логин</label>
        <input type="text" id="loginInput" name="login" />

        <label htmlFor="passwordInput">Пароль</label>
        <input type="password" id="passwordInput" name="password" />

        <button>Зарегистрироваться</button>
      </form>
    </Layout>
  );
};
