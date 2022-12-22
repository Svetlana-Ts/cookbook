const React = require('react');
const Layout = require('./Layout');
const Menu = require('./Menu');

module.exports = function Main({ isAuth }) {
  return (
    <Layout>
      <header>
        <div>LOGO</div>
        <div>NAME</div>
        <div>MENU</div>
        <Menu isAuth={isAuth} />
      </header>
      <h1>MAIN</h1>
    </Layout>
  );
};
