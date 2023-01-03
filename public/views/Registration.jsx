const React = require('react');
const Layout = require('./Layout');
// const Main = require('./Main');

module.exports = function Login() {
  return (
    <Layout>
      <a href="/">
        <img
          width="100px"
          height="50px"
          src="/img/logo.png"
          className="logo-return"
        />
      </a>
      <div className="signin-form">
        <h1 className="signin-title">Sign up</h1>

        <div className="wrapper">
          <form
            className="signup"
            method="post"
            action="/auth/register"
            autocomplete="off"
          >
            <input
              type="email"
              id="emailInput"
              name="email"
              placeholder="email"
            />

            <input
              type="text"
              id="loginInput"
              name="login"
              placeholder="login"
            />

            <input
              type="password"
              id="passwordInput"
              name="password"
              placeholder="password"
            />

            <button type="submit">
              <i className="fa-sharp fa-solid fa-caret-right"></i>
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
