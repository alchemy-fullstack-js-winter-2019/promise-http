const request = require('supertest');
const app = require('./lib/app');

describe('app', () => {
  it('has a testing route', () => {
    return request(app)
      .get('/you')
      // post()
      .query({ name: 'connor' })
      // send({})
      .then(res => {
        expect(res.body).toEqual({ hi: 'there connor' });
      });
  });
});