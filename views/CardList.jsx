const React = require('react');
const Card = require('./Card');
const Main = require('./Main');

module.exports = function CardList({ isAuth, cards, userLogin }) {
  return (
    <Main userLogin={userLogin} isAuth={isAuth}>
      <div>
        <p>Сортировать по:</p>
        <a href="/cards/?order=time&sort=desc">времени приготовления</a>
        <a href="/cards/?order=ingredients&sort=desc">ингредиентам</a>
      </div>
      <ul>
        {cards.map((card) => (
          <Card key={card.id} isAuth={isAuth} card={card} />
        ))}
      </ul>
    </Main>
  );
};
