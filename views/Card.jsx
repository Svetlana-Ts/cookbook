const React = require('react');

function Card({ card }) {
  return (
    <li className="card">
      <div className="card-photo">
        <a href={`/favourites/${card.id}`} className="card-btn-like">Like</a>
        <img width="100px" height="100px" src={card.photo} className="card-photo-img" alt="" />
      </div>
      <div className="card-body">
        <a className="card-body-name" href={`/cards/${card.id}`}>{card.title}</a>
        <div className="card-body-cook-time">{card.time}</div>
        <div className="card-body-ingr-count">{card.ingredients.split('|').length}</div>
      </div>
    </li>
  );
}

module.exports = Card;
