
'use strict';

var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.contentType("text/plain");
  if (req.query.question) {
    if (req.query.question === "What time do you start the qualifying race of the Formula 1 Monaco?") {
      res.send("13:00");
    } else if (req.query.question === "What do you think of the Formula 1 Russia?") {
      res.send("Sochi is an interesting track: a circuit with room to overtake. Hopefully we don’t need to but if it’s necessary, there are opportunities.");
    } else if (req.query.question === "For which team do you race?") {
      res.send("Scuderia Toro Rosso");
    } else if (req.query.question === "Which place did you end in China?") {
      res.send("8th");
    } else {
      res.send("Ok, I don't understand your question '" + req.query.question + "'.");
    }
  } else {
    res.send("Hi, I'm Max Verstappen. Do you have a question for me?");
  }
});

module.exports = app;