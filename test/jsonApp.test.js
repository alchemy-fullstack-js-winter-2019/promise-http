const request = require('supertest');
const app = require('../lib/jsonApp');

describe('app', () => {
  it('has a tester route', () => {
    return request(app)
      .get('/tester')
      .then(res => {
        expect(res.body).toEqual({ testing: 123 });
      });
  });
});
