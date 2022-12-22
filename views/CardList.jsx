const React = require('react');
const Card = require('./Card');

module.exports = function CardList({ cards }) {
  return (
    <ul>
      {cards.map((card) => <Card key={card.id} card={card} />)}
    </ul>
  );
};
