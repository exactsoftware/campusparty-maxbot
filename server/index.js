
'use strict';

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.contentType("text/plain");
  if (req.query.question) {
    res.send("Ok, I don't understand your question '" + req.query.question + "'.");
  } else {
    res.send("Hi, I'm Max Verstappen. Do you have a question for me?");
  }
});

module.exports = app;