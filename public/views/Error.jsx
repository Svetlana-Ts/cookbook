const React = require('react');
const Layout = require('./Layout');

module.exports = function Error({ error }) {
  return (
    <Layout>
      <h1>{error.message}</h1>
    </Layout>
  );
};
