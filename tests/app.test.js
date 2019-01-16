const request = require('supertest');
const app = require('../lib/app');

jest.mock('../service/RickAndMortyApi.js');

describe('app', () => {

  it('can take a query string', () => {
    return request(app)
      .get('/you?name=unclebob')
      .then(res => {
        expect(res.body).toEqual({ test: 'hi there unclebob' });
      });
  });

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

  it('can return all characters', () => {
    return request(app)
      .get('/character')
      .then(res => {
        expect(res.text).toEqual(`<html>
        <body>

        </body>
        </html>
        `);
      });
  });

  it('can post a note to a specific character', () => {
    return request(app)
      .post('/character')
      .send({ characterId: 1, note: 'Its pickle Rick' })
      .then(res => {
        expect(res.status).toEqual(204)
      });
  });
});
