const React = require('react');
const Layout = require('./Layout');
const Menu = require('./Menu');

module.exports = function Main({ isAuth, userLogin = '', baseUrl, children }) {
  let header;
  switch (baseUrl) {
    case '/cards':
      header = (
        <div className="header">
          <div className="container">
            <div className="header-line">
              <div className="header-logo">
                <a className="js-logo" href="/">
                  <img
                    className="js-logo-img"
                    width="200px"
                    height="100px"
                    src="/img/logo.png"
                  />
                </a>
              </div>

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

            <div className="header-down">
              <div className="header-title">
                Welcome to our
                <div className="header-subtitle">Recipe Book</div>
                <div className="header-btn">
                  <a href="#card-list" className="header-button">
                    VIEW RECIPES
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
      break;
    case '/favourites':
      header = (
        <div className="header-mini">
          <div className="header-mini-box">
            <a href="/">
              <img
                width="100px"
                height="50px"
                src="/img/logo.png"
                className="logo-return js-logo-img"
              />
            </a>

            <a className="logout-link js-logout" href="/auth/logout">
              Log out
            </a>
          </div>
        </div>
      );
      break;
    default:
      break;
  }
  return (
    <Layout>
      {header}
      <div className="main">{children}</div>
    </Layout>
  );
};
