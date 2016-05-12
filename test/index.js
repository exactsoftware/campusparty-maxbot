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
  it('respond with 1st sample question', function(done) {
    request(app)
      .get('/?question=What+time+do+you+start+the+qualifying+race+of+the+Formula+1+Monaco?')
      .set('Accept', 'text/plain')
      .expect('Content-Type', /plain/)
      .expect(200)
      .expect("13:00", done);
  });
  it('respond with 2nd sample question', function(done) {
    request(app)
      .get('/?question=What+do+you+think+of+the+Formula+1+Russia?')
      .set('Accept', 'text/plain')
      .expect('Content-Type', /plain/)
      .expect(200)
      .expect("Sochi is an interesting track: a circuit with room to overtake. Hopefully we don’t need to but if it’s necessary, there are opportunities.", done);
  });
  it('respond with 3rd sample question', function(done) {
    request(app)
      .get('/?question=For+which+team+do+you+race?')
      .set('Accept', 'text/plain')
      .expect('Content-Type', /plain/)
      .expect(200)
      .expect("Scuderia Toro Rosso", done);
  });
  it('respond with 4th sample question', function(done) {
    request(app)
      .get('/?question=Which+place+did+you+end+in+China?')
      .set('Accept', 'text/plain')
      .expect('Content-Type', /plain/)
      .expect(200)
      .expect("8th", done);
  });
});