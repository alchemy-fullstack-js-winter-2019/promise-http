const request = require('supertest');
const { app } = require('../lib/app');

describe('app', () => {
  it.skip('has a tester route', () => {
    return request(app)
      .post('/you')
      .send({})
      .then(res => {
        expect(res.body).toEqual({ hi: 'there kate' });
      });
  });
});
