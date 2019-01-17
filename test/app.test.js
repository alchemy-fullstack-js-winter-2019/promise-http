const app = require('../lib/app');
const request = require('supertest');

jest.mock('../lib/service/rickAndMortyApi.js');


describe('app', () => {
  it('writes a list of characters to browser', () => {
    // Using supertest to make a fake server to run app which is an http listener
    return request(app)
      .get('/characters')
      .then(res => {
        expect(res.text).toEqual(
          `<html><body><ul><li>Name: Rick Sanchez, Status: Alive, Species: Human</li>,<li>Name: Morty Smith, Status: Alive, Species: Human</li></ul></body></html>`
        );
      });
  });

  it('save a note to a note object', () => {
    return request(app)
      .post('/characters')
      .send({ characterId: 1234, note: 'I\'m a note' })
      .then(res => {
        expect(res.status).toEqual(204);
      });
  });

  it('returns a character with all notes', () => {
    return request(app)
      .get('/characters/1234')
      .then(res => {
        expect().toEqual();
      });
  });

});
