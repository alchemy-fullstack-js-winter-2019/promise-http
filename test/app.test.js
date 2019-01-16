const request = require('supertest');
const app = require('../lib/app');

jest.mock('../lib/services/rickandMortyApi.js');

describe('app', () => {
  it('has a testing route', () => {
    return request(app)
      .post('/note')
      .send({ text: 'This is a note' })
      .then(res => {
        expect(res.status).toEqual(204);
      });
  });

  it('can take a query string', () => {
    return request(app)
      .get('/you?name=unclebob')
      .then(res => {
        expect(res.body).toEqual({ text: 'hi there unclebob' });
      });
  });

  it('can get character based on id', () => {
    return request(app)
      .get('/character/1')
      .then(res => {
        expect(res.body).toEqual({
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human'
        });
      });
  });
});
