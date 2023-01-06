const React = require('react');
const Layout = require('./Layout');
const Main = require('./Main');
const Menu = require('./Menu');

function Recipe({ isAuth, card, userId, userLogin }) {
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
              <div className="recipe-photo">
                <img height="400px" width="400px" src={card.photo} alt="" />
                {isAuth && (
                  <a
                    href={`/favourites/${card.id}`}
                    className="recipe-btn-like"
                  >
                    {like}
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
