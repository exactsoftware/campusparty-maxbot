'use strict';

var request = require('supertest');
var app = require('../server');

describe('GET /', function() {
  it('respond with introduction', function(done) {
    request(app)
      .get('/')
      .set('Accept', 'text/plain')
      .expect('Content-Type', /plain/)
      .expect(200)
      .expect("Hi, I'm Max Verstappen. Do you have a question for me?", done);
  });
});

describe('GET /?question', function() {
  it('respond with unanswered question', function(done) {
    request(app)
      .get('/?question=test')
      .set('Accept', 'text/plain')
      .expect('Content-Type', /plain/)
      .expect(200)
      .expect("Ok, I don't understand your question 'test'.", done);
  });
});