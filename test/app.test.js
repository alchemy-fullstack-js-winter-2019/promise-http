const app = require('../lib/app');
const request = require('supertest');

jest.mock('../lib/service/rickAndMortyApi.js');


describe('rick and Morty GET and POST api tests', () => {
  it('writes a list of characters to browser', () => {
    // Using supertest to make a fake server to run app which is an http listener
    return request(app)
      .get('/characters')
      .then(res => {
        expect(res.text).toContain('Rick');
      });
  });

  it('save a note to a note object', () => {
    return request(app)
      .post('/characters')
      .send({ characterId: 1, note: 'I\'m a note' })
      .then(res => {
        expect(res.status).toEqual(204);
      });
  });

  it('returns a character with all notes', () => {
    return request(app)
      .post('/characters')
      .send({ characterId: 1, note: 'I\'m a note' })
      .then(() => {
        return request(app)
          .get('/characters/1')
          .then(res => {
            expect(res.text).toContain('Rickq');
          });
      });
  });
});
