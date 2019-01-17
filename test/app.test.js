const request = require('supertest');
const app = require('../lib/app');

jest.mock('../lib/services/rickAndMortyApi.js');

describe('app', () => {
  it('gets a character by id', () => {
    return request(app)
      .get('/character/1')
      .then(res => {
        expect(res.body).toEqual({
          name: 'Rick Sanchez',
          species: 'Human',
          status: 'Alive'
        });
      });
  });

  it('can add a note to a character based on id', () => {
    return request(app)
      .post('/characters')
      .send({ 1234: ['My favorite character'] })
      .then(res => {
        expect(res.status).toEqual(200);
      });
  });

  it('can get a character by id and their notes', () => {
    return request(app)
      .get('/characters/1')
      .then(res => {
        expect(res.status).toEqual(200);
      });
  });
});