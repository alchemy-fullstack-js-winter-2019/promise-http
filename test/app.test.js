const request = require('supertest');
const app = require('../lib/app');
const bodyParser = require('../lib/bodyParser');
const note = { text: 'This is a note' };

describe('app', () => {
  it('has a testing route', () => {
    return request(app)
      .get('/tester')
      .then(res => {
        expect(res.body).toEqual({ testing: 123 });
      });
  });

  it.only('can POST data', () => {
    return request(app)
      .post('/note')
      .send(bodyParser(note))
      .then(res => {
        expect(bodyParser(res.body)).toEqual({ text: 'This is a note' });
      });
  });

  it('can take a query string', () => {
    return request(app)
      .get('/you?name=unclebob')
      .then(res => {
        expect(res.body).toEqual({ text: 'hi there unclebob' });
      });
  });
});
