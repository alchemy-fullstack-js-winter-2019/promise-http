const request = require('supertest');
const app = require('../lib/rickAndMortyCharactersApp');

//mocking a function in order to limit calls on third party apis
jest.mock('../lib/services/rickAndMortyApi.js');

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
