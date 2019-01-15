const request = require('supertest');
const app = require('../lib/app');

describe('app', () => {
  it('has a testing route', () => {
    return request(app)
      .get('./testing')
      .then(res => {
        expect(res.text).toEqual('testing123');
      });
  });
});

describe('app2', () => {
  it('has a testing route', () => {
    return request(app)
      .get('./testing')
      .then(res => {
        expect(res).toEqual({
          testing: '123'
        });
      });
  });
});
