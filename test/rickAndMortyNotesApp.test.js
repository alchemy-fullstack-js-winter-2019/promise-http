const request = require('supertest');
const app = require('../lib/rickAndMortyNotesApp');

jest.mock('../lib/services/rickAndMortyGetCharactersApi.js');

describe('rick and morty notes app', () => {
  beforeEach(() => {
    return request(app)
      .post('/characters')
      .send({ characterId: 2, note: 'FOOTBALL TEAMS!' });
  });
  
  it('can list the characters on the characters route', () => {
    return request(app)
      .get('/characters')
      .then(res => {
        expect(res.text).toContain('Rick Sanchez');
      });
  });

  it('can post notes', () => {
    return request(app)
      .post('/characters')
      .send({ characterId: 1, note: 'My favorite character' })
      .then(res => {
        expect(res.statusCode).toEqual(200);
      });
  });

  it('can display notes for characters', () => {
    return request(app)
      .get('/characters/1')
      .then(res => {
        expect(res.text).toContain('My favorite character');
      });
  });
});
