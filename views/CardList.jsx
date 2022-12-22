const React = require('react');
const Card = require('./Card');

module.exports = function CardList({ isAuth, cards }) {
  return (
    <ul>
      {cards.map((card) => (
        <Card key={card.id} isAuth={isAuth} card={card} />
      ))}
    </ul>
  );
};
