const React = require('react');
const Layout = require('./Layout');
const Menu = require('./Menu');

module.exports = function Main({ isAuth }) {
  return (
    <Layout>
      <header>
        <div>LOGO</div>
        <div>NAME</div>
        <div>MENU</div>
        <Menu isAuth={isAuth} />
      </header>
      <body>
        <h1>MAIN PAGE</h1>
        <div className="card">
          <div className="card-photo">
            <h1>Photo</h1>
            <button type="submit" className="card-btn-like">Like</button>
            <img src="" className="card-photo-img" alt="" />
          </div>
          <div className="card-body">
            <a className="card-body-name" href="/recipe">Card title</a>
            <div className="card-body-ingr-count">Ingridient count</div>
            <div className="card-body-cook-time">Cooking time</div>
          </div>
        </div>
      </body>
    </Layout>
  );
};
