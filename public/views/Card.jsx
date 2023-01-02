const React = require('react');

function Card({ isAuth, card, isLiked }) {
  const like = isLiked ? (
    'Unlike'
  ) : (
    <img width="35px" height="35px" src="/img/like.png" />
  );

  return (
    <li className="card">
      <div className="card-photo">
        {isAuth && (
          <a href={`/favourites/${card.id}`} className="card-btn-like">
            {/* <img width="35px" height="35px" src="/img/like.png" /> */}
            {like}
          </a>
        )}
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
          <a href={`/favourites/${card.id}`} className="card-btn-like">
            <i class="fa-solid fa-heart"></i>
          </a>
        )}
      </div>

      <div className="card-body">
        <div className="card-body-name">
          <a href={`/cards/${card.id}`}>
            {card.title.length > 30
              ? `${card.title.slice(0, 25)}...`
              : card.title}
          </a>
        </div>

        <table className="card-table">
          <tr>
            <th>Cooking time:</th>
            <th>Ingredients count:</th>
          </tr>

          <tr>
            <td>{`${card.time} minutes`}</td>
            <td>{`${card.ingredients.split('|').length} products`}</td>
          </tr>
        </table>

        {/* <a className="card-body-name" href={`/cards/${card.id}`}>View the recipe</a> */}
      </div>
    </li>
  );
}

module.exports = Card;
