const React = require('react');
const Layout = require('./Layout');

function Recipe() {
  return (
    <Layout>
      <div className="recipe">
        <div className="recipe-photo">
          <h1>Photo</h1>
          <img src="" className="recipe-photo-img" alt="" />
        </div>
        <div className="recipe-body">
          <h2 className="recipe-body-name">Recipe title</h2>
          <h2>Ingridients list</h2>
          <ul className="recipe-body-list">
            <li className="recipe-list-item">Item1</li>
            <li className="recipe-list-item">Item1</li>
          </ul>
        </div>
        <div className="recipe-text">Instructions</div>
        <p className="recipe-text-instr">How cook it?!</p>
      </div>
      <a href="/">Go back to Main Page</a>
    </Layout>
  );
}

module.exports = Recipe;
