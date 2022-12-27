const React = require('react');
const Layout = require('./Layout');
const Menu = require('./Menu');

module.exports = function Main({ isAuth, userLogin = '', children }) {
  return (
    <Layout>
      <div className="header">
        <div className="container">
          <div className="header-line">

            <div className="header-logo">
              <a href="/"><img width="200px" height="100px" src="/img/logo.png"/></a>
            </div>
            
            <div className="dropdown">
              <button className="dropdown-toggle" easy-toggle="#dropdown" easy-class="show" easy-rcoe>
                MENU</button><Menu isAuth={isAuth} userLogin={userLogin} />
            </div>

          </div>

          <div className="header-down">

            <div className="header-title">
              Welcome to our

              <div className="header-subtitle">
                Recipe Book
              </div>

              <div className="header-btn">
                <a href="#card-list" className="header-button">VIEW RECIPES</a>
              </div>

            </div>
          </div>

        </div>
      </div>
      {children}
    </Layout>
  );
};
