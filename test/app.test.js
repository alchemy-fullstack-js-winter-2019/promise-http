const request = require('supertest');
const app = require('../lib/app');

describe('app', () => {
  it('has a testing route', () => {
    return request(app)
      .get('/tester')
      .then(res => {
        expect(res.body).toEqual({ testing: 123 });
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
