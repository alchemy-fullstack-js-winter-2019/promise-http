const request = require('supertest');
const app = require('../lib/app');

describe('app', () => {
  it('has a testing route', () => {
    return request(app)
      .get('/tester')
      .then(res => {
        expect(res.text).toEqual('testing123');
      });
  });
});
