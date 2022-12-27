const React = require('react');
const Layout = require('./Layout');

module.exports = function Menu({ isAuth, userLogin }) {
  if (isAuth) {
    return (
      <div id="dropdown" className="dropdown-menu">
        {userLogin && <p id="greeting">{`Welcome, ${userLogin}`}</p>}
          <a href="/favourites" className="dropdown-link">Favoutites</a>
          <a href="/auth/logout" className="dropdown-link">Log out</a>
     </div>   
    );
  }
  return (
    <div id="dropdown" className="dropdown-menu">
        <a href="/auth/login" className="dropdown-link">Log in</a>
        <a href="/auth/register" className="dropdown-link">Sign in</a>  
    </div>
  );
};
