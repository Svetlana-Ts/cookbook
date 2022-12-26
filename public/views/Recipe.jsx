const React = require('react');
const Layout = require('./Layout');

function Recipe({ isAuth, card }) {
  return (
    <Layout>
      <div className="recipe">
        <div className="recipe-photo">
          <img height="400" width="400" src={card.photo} className="recipe-photo-img" alt="" />
          {isAuth && (
            <a href={`/favourites/${card.id}`} className="card-btn-like">
              Like
            </a>
          )}
        </div>
        <div className="recipe-body">
          <h2 className="recipe-body-name">{card.title}</h2>
          <h2>Ingridients list</h2>
          <ul className="recipe-body-list">
            {card.ingredients.split('|').map((ing) => (
              <li className="recipe-list-item">{ing}</li>
            ))}
          </ul>
        </div>
        <h2>Instruction</h2>
        <div className="recipe-text">{card.instruction}</div>
      </div>
      <p />
      <a href="/">Go back to Main Page</a>
    </Layout>
  );
}

module.exports = Recipe;
