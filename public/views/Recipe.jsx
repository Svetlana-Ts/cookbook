const React = require('react');
const Layout = require('./Layout');

function Recipe({ isAuth, card }) {
  return (
    <Layout>
      <div className="recipe-container">

        <div className="recipe">
          <div className="recipe-name">{card.title}</div>

          <div className="recipe-info">

            <div className="recipe-photo">          
              <img height="400px" width="400px" src={card.photo} alt="" />
              {isAuth && (
                <a href={`/favourites/${card.id}`} className="recipe-btn-like">
                  <img width="35px" height="35px" src="/img/like.png"/>
                </a>
              )}
            </div> 

            <div className="recipe-list">
              <div className="ingredients">
                <h2>Ingridients list</h2>

                <ul className="recipe-ing-list">
                  {card.ingredients.split('|').map((ing) => (
                  <li className="recipe-ing-item">{ing}</li>
                  ))}
                </ul>  
              </div>
               
            </div>
          </div>

          <div className="recipe-text">
            <h2>Direction</h2>
            <div>{card.instruction}</div>
          </div>

          <a href="/">Go back to Main Page</a>

        </div>      
      </div>
      
    </Layout>
  );
}

module.exports = Recipe;
