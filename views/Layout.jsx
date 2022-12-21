const React = require('react');

module.exports = function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CookBook</title>
      </head>
      <body>
        <header>
          <div>LOGO</div>
          <div>NAME</div>
          <div>MENU</div>
        </header>
        {children}
      </body>
    </html>
  );
};
