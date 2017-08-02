const express = require("express");
const bodyParser = require("body-parser");
/*
// native mongo driver
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;
*/
// mongoose stuff
const mongoose = require('mongoose');
const promisify = require('es6-promisify');
const routes = require('./app/routes/index');


const app = express();

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// promisify some callback based APIs
app.use((req, res, next) => {
  req.login = promisify(req.login, req);
  next();
});

app.use('/', routes);

module.exports = app;