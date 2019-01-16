const request = require('supertest');
const app = require('../lib/app');

describe('app', () => {
  it('has a tester route', () => {
    return request(app)
      // .get('/tester')
      // .query({ name: 'ryan ' })
      // .then(res => {
      .post('/note')
      .send({ 'im a note' })
      .then(res => {
        expect(res.text).toEqual(204);
      });
  });
});

