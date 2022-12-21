require('dotenv').config();
require('@babel/register');
const React = require('react');
const ReactDomServer = require('react-dom/server');
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server started'));
