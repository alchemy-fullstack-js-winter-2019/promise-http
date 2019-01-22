const request = require('supertest');
const app = require('../lib/app');

jest.mock('../service/RickAndMortyApi.js', () => ({
  getCharacter() {
    return Promise.resolve({
      name: 'Rick Sanchez',
      species: 'Human',
      status: 'Alive'
    });
  },
  getCharacters() {
    return Promise.resolve([
      {
        name: 'Rick Sanchez',
        species: 'Human',
        status: 'Alive'
      },
      {
        name: 'Morty Smith',
        species: 'Human',
        status: 'Alive'
      }
    ]);
  }
}));


describe('app', () => {

  // it('can take a query string', () => {
  //   return request(app)
  //     .get('/you?name=unclebob')
  //     .then(res => {
  //       expect(res.body).toEqual({ test: 'hi there unclebob' });
  //     });
  // });

  // it('gets a character by id', () => {
  //   return request(app)
  //     .get('/characters/1')
  //     .then(res => {
  //       expect(res.body).toEqual({
  //         name: 'Rick Sanchez',
  //         species: 'Human',
  //         status: 'Alive'
  //       });
  //     });

  // });

  // it('can return all characters', () => {
  //   return request(app)
  //     .get('/characters')
  //     .then(res => {
  //       expect(res.text).toEqual(`<html>
  //       <body>

  //       </body>
  //       </html>
  //       `);
  //     });
  // });

  // it('can post a note to a specific character', () => {
  //   return request(app)
  //     .post('/characters')
  //     .send({ characterId: 1, note: 'Its pickle Rick' })
  //     .then(res => {
  //       expect(res.status).toEqual(204);
  //     });
  // });

  // it('gets notes for a character', () => {
  //   return request(app)
  //     .post('/characters')
  //     .send({ characterId: 1, note: 'Its pickle Rick' })
  //     .then(() => {
  //       return request(app)
  //         .get('/characters/1');
  //     }) 
  //     .then(res => {
  //       expect(res.text).toContain('Its pickle rick');
  //     });

  describe('post module.exports route', () => {
    it('has a POST route', () => {
      return request(app)
        .post('/characters')
        .send({ characterId: 1234, node: 'My favorite character' })
        .then(res => {
          expect(res.status).toEqual(204);
        });
    });
  });
});

