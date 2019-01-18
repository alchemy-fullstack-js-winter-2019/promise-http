const request = require('supertest');
const app = require('../lib/rickAndMortyApp');

jest.mock('../lib/service/mocks/rickAndMortyApi.js');

describe('app', () => {
  it('has a character', () => {
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
  it('gets list of characters', () => {
    return request(app)
      .get('/characters/')
      .then(res => {
        expect(res.text).toEqual('<html><body><p>Rick Sanchez</p><p>Human</p><p>Alive</p><p>Morty Smith</p><p>Human</p><p>Alive</p><p>Summer Smith</p><p>Human</p><p>Alive</p><p>Beth Smith</p><p>Human</p><p>Alive</p><p>Jerry Smith</p><p>Human</p><p>Alive</p><p>Abadango Cluster Princess</p><p>Alien</p><p>Alive</p><p>Abradolf Lincler</p><p>Human</p><p>unknown</p><p>Adjudicator Rick</p><p>Human</p><p>Dead</p><p>Agency Director</p><p>Human</p><p>Dead</p><p>Alan Rails</p><p>Human</p><p>Dead</p><p>Albert Einstein</p><p>Human</p><p>Dead</p><p>Alexander</p><p>Human</p><p>Dead</p><p>Alien Googah</p><p>Alien</p><p>unknown</p><p>Alien Morty</p><p>Alien</p><p>unknown</p><p>Alien Rick</p><p>Alien</p><p>unknown</p><p>Amish Cyborg</p><p>Alien</p><p>Dead</p><p>Annie</p><p>Human</p><p>Alive</p><p>Antenna Morty</p><p>Human</p><p>Alive</p><p>Antenna Rick</p><p>Human</p><p>unknown</p><p>Ants in my Eyes Johnson</p><p>Human</p><p>unknown</p><html><body></body></html>');
      });
  });
  // To do
  // it('can post a note', () => {
  //   return request(app)
  //     .post('/character/')
  //     .then(res => {
  //       expect(res.text).toEqual({ characterId: 1234, note: 'My favorite character' });
  //     });
  // });
});
