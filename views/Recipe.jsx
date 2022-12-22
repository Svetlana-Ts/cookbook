const React = require('react');
const Layout = require('./Layout');

function Recipe({ card }) {
  return (
    <Layout>
      <div className="recipe">
        <div className="recipe-photo">
          <img src={card.photo} className="recipe-photo-img" alt="" />
        </div>
        <div className="recipe-body">
          <h2 className="recipe-body-name">{card.title}</h2>
          <h2>Ingridients list</h2>
          <ul className="recipe-body-list">
            {card.ingredients.split('|').map((ing) => <li className="recipe-list-item">{ing}</li>)}
          </ul>
        </div>
        <div className="recipe-text">{card.instruction}</div>
      </div>
      <a href="/">Go back to Main Page</a>
    </Layout>
  );
}

module.exports = Recipe;
