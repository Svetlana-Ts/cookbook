const React = require('react');
const Like = require('./Like');

function Card({ isAuth, card, userId }) {
  return (
    <li className="card">
      <div className="card-photo">
        <a className="card-photo-link" href={`/cards/${card.id}`}>
          <img
            width="250px"
            height="250px"
            src={card.photo}
            className="card-photo-img js-card-img"
            alt=""
          />
        </a>
        {isAuth && (
          <a href={`/favourites/${card.id}`} className="card-btn-like js-like">
            <Like card={card} userId={userId} />
          </a>
        )}
      </div>

      <div className="card-body">
        <div className="card-body-name">
          <a className="js-card-title" href={`/cards/${card.id}`}>
            {card.title.length > 24
              ? `${card.title.slice(0, 24)}...`
              : card.title}
          </a>
        </div>

        <div className="card-table">
          <div className="card-table-box">
            <img
              className="card-table-img"
              src="/img/products.png"
              alt="products"
            />
            <p>{`${card.count} products`}</p>
          </div>
          <div className="card-table-box">
            <p>{`${card.time} minutes`}</p>
            <img
              className="card-table-img card-time"
              src="/img/time.png"
              alt="time"
            />
          </div>
        </div>
      </div>
    </li>
  );
}

module.exports = Card;
