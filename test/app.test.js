const request = require('supertest');
const app = require('../lib/app');

describe('app', () => {
  it('has a tester route', () => {
    return request(app)
      // .get('/tester')
      // .query({ name: 'ryan ' })
      // .then(res => {
      .post('/note')
      .send({ text: 'im a note' })
      .then(res => {
        expect(res.status).toEqual(204);
      });
  });
});

