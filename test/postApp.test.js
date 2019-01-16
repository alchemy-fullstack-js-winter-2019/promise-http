const request = require('supertest');
const app = require('../lib/postApp');

describe('app', () => {
  it('has a tester route', () => {
    return request(app)
      .post('/note')
      .send({ text: 'This is a note' })
      .then(res => {
        expect(res.status).toEqual(204);
      });
  });
});
