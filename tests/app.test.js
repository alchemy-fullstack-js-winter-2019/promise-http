const request = require('supertest');
const app = require('../lib/app');

describe('app', () => {

  it('responds to a POST on /note', () => {
    return request(app)
      .post('/note')
      .send({ text: 'This is a note' })
      .then(res => {
        expect(res.status).toEqual(204);
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
