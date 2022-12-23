const React = require('react');
const CardList = require('./CardList');
const Layout = require('./Layout');
const Menu = require('./Menu');

module.exports = function Main({ isAuth, cards, userLogin = '' }) {
  return (
    <Layout>
      <header>
        <a href="/">LOGO</a>
        <div>NAME</div>
        <div>MENU</div>
        <Menu isAuth={isAuth} userLogin={userLogin} />
      </header>
      <h1>MAIN PAGE</h1>
      <div>
        <p>Сортировать по:</p>
        <a href="/cards/?order=time&sort=desc">времени приготовления</a>
        <a href="/cards/?order=ingredients&sort=desc">ингредиентам</a>
      </div>
      <CardList isAuth={isAuth} cards={cards} />
    </Layout>
  );
};
