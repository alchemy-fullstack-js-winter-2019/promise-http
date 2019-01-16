const request = require('supertest');
const app = require('../lib/rickAndMortyCharacters');

describe('rick and morty characters app', () => {
  it('has a tester route', () => {
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
