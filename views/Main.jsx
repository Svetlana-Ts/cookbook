const React = require('react');
const Layout = require('./Layout');
const Menu = require('./Menu');

module.exports = function Main({ isAuth, userLogin = '', children }) {
  return (
    <Layout>
      <header>
        <nav>
          <li>
            <a href="/">LOGO</a>
          </li>
          <li>NAME</li>
          <li>
            MENU
            <Menu isAuth={isAuth} userLogin={userLogin} />
          </li>
        </nav>
      </header>
      {children}
    </Layout>
  );
};
