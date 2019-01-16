const { rickAndMortyApp } = require('../lib/rickAndMortyApp');
const request = require('supertest');

describe('app', () => {
  it('has a tester route', () => {
    return request(rickAndMortyApp)
      .post('/character/1')
      .then(res => {
        expect(res.body).toEqual({
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human'
        });
      });
  });
});
