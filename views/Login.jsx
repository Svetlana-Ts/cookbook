const React = require('react');
const Layout = require('./Layout');

module.exports = function Login() {
  return (
    <Layout>
      <h1>Вход</h1>
      <form method="post" action="/auth/login">
        <label htmlFor="emailInput">Почта</label>
        <input type="email" id="emailInput" name="email" />

        <label htmlFor="passwordInput">Пароль</label>
        <input type="password" id="passwordInput" name="password" />

        <button>Войти</button>
      </form>
    </Layout>
  );
};
