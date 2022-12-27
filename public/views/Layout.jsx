const React = require('react');

module.exports = function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CookBook</title>
        <link rel="stylesheet" href="/css/style.css"/>
        <script src="https://cdn.jsdelivr.net/npm/easy-toggler@2.2.7"></script>
      </head>
      <body>{children}
      </body>
    </html>
  );
};
