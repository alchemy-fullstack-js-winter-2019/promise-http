const request = require('supertest');
const app = require('../lib/queryApp');

describe('app', () => {
  it('has a tester route', () => {
    return request(app)
      .get('/you')
      .query({ name: 'kristin' })
      .then(res => {
        expect(res.body).toEqual({ hi: 'there kristin' });
      });
  });
});
