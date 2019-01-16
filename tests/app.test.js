const request = require('supertest');
const app = require('../lib/app');

describe('app', () => {
  it('has a tester route', () => {
    return request(app)
      .get('/you')
      .query({ name: 'abel' })
      .then(res => {
        expect(res.body).toEqual({ hi: 'there abel' });
      });
  });

  // it('has a tester route', () => {
  //   return request(app)
  //     .get('/you')
  //     .then(res => {
  //       expect(res.text).toEqual('testing: 123');
  //     });
  // });
});
