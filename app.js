require('dotenv').config();
require('@babel/register');
const React = require('react');
const ReactDomServer = require('react-dom/server');
const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server started'));
