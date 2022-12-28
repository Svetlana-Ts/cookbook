const React = require('react');
const Layout = require('./Layout');
// const Main = require('./Main');

module.exports = function Login() {
  return (
    <Layout>
      <div className="signin-form">
        <h1 className="signin-title">Sign up</h1>

        <div className="wrapper">
          <form className="signin" method="post" action="/auth/register" autocomplete="off">
        
            <input type="email" id="emailInput" name="email" placeholder="email"/>
        
            <input type="text" id="loginInput" name="login" placeholder="login"/>

            <input type="password" id="passwordInput" name="password" placeholder="password" />

            <button type="submit"><i class="fa-sharp fa-solid fa-caret-right"></i></button>

      </form>
      </div>
      </div>
    </Layout>
  );
};
