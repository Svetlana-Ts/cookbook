const React = require('react');

function Card({ isAuth, card, userId }) {
  let isLiked = false;
  card.users.forEach((user) => {
    if (user.id === userId) {
      isLiked = true;
    }
  });

  const like = isLiked ? (
    <i style={{ color: 'red' }} className="fa-solid fa-heart"></i>
  ) : (
    <i className="fa-solid fa-heart"></i>
  );
  return (
    <li className="card">
      <div className="card-photo">
        <a href={`/cards/${card.id}`}>
          <img
            width="250px"
            height="250px"
            src={card.photo}
            className="card-photo-img"
            alt=""
          />
        </a>
        {isAuth && (
          <a href={`/favourites/${card.id}`} className="card-btn-like js-like">
            {like}
          </a>
        )}
      </div>

      <div className="card-body">
        <div className="card-body-name">
          <a href={`/cards/${card.id}`}>
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
