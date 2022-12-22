const React = require('react');
const CardList = require('./CardList');
const Layout = require('./Layout');
const Menu = require('./Menu');

module.exports = function Main({ isAuth, cards }) {
  // console.log(cards);

  return (
    <Layout>
      <header>
        <div>LOGO</div>
        <div>NAME</div>
        <div>MENU</div>
        <Menu isAuth={isAuth} />
      </header>
      <h1>MAIN PAGE</h1>
      <CardList cards={cards} />
    </Layout>
  );
};
