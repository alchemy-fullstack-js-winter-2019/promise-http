const rickAndMortyApp = require('../lib/service/rickAndMortyApp');
const request = require('supertest');

jest.mock('../lib/service/rickAndMortyApi.js');

describe('app', () => {
  it('has a tester route', () => {
    return request(rickAndMortyApp)
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
