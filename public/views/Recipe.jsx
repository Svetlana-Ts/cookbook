const React = require('react');
const Layout = require('./Layout');
const Like = require('./Like');
const Menu = require('./Menu');

function Recipe({ isAuth, card, userId, userLogin }) {
  return (
    <Layout>
      <div className="main">
        <div className="header-mini">
          <div className="header-mini-box">
            <a href="/">
              <img
                width="100px"
                height="50px"
                src="/img/logo.png"
                className="logo-return"
              />
            </a>

            <div className="dropdown">
              <button
                className="dropdown-toggle"
                easy-toggle="#dropdown"
                easy-class="show"
              >
                MENU
              </button>
              <Menu isAuth={isAuth} userLogin={userLogin} />
            </div>
          </div>
        </div>
        <div className="recipe-container">
          <div className="recipe">
            <div className="recipe-name">{card.title}</div>

            <div className="recipe-info">
              <div className="recipe-photo js-recipe-img">
                <img height="400px" width="400px" src={card.photo} alt="" />
                {isAuth && (
                  <a
                    href={`/favourites/${card.id}`}
                    className="recipe-btn-like js-like"
                  >
                    <Like card={card} userId={userId} />
                  </a>
                )}
              </div>

              <div className="recipe-list">
                <div className="ingredients">
                  <h2>Ingredients list</h2>

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
          </div>
        </div>
      </div>
    </Layout>
  );
}

module.exports = Recipe;
