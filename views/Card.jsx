const React = require('react');

function Card({ isAuth, card }) {
  return (
    <li className="card">
      <div className="card-photo">
        {isAuth && (
          <a href={`/favourites/${card.id}`} className="card-btn-like">
            Like
          </a>
        )}
        <img
          width="250px"
          height="250px"
          src={card.photo}
          className="card-photo-img"
          alt=""
        />
      </div>
      <div className="card-body">
        <p />
        <b>{card.title}</b>
        <div className="card-body-cook-time">{`Cooking time: ${card.time} minutes`}</div>
        <div className="card-body-ingr-count">{`Ingredients count: ${card.ingredients.split('|').length} products`}</div>
        <a className="card-body-name" href={`/cards/${card.id}`}>View the recipe</a>
      </div>
      <p />
    </li>
  );
}

module.exports = Card;
