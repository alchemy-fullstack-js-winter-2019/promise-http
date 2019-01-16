const request = require('supertest');
const app = require('../lib/app');

jest.mock('../lib/service/rickAndMortyApi.js', () => ({
  getCharacter() {
    return Promise.resolve({
      name: 'Rick Sanchez',
      species: 'Human',
      status: 'Alive'
    });
  }
}));

describe('app', () => {
  // server and app
  // it('has a testing route', () => {
  //   return request(app)
  //     .get('/tester')
  //     .then(res => {
  //       expect(res.text).toEqual('testing123');
  //     });
  // });

  // json app
  // it('has a testing route', () => {
  //   return request(app)
  //     .get('/tester')
  //     .then(res => {
  //       expect(res.body).toEqual({ testing: 123 });
  //     });
  // });

  // Query Strings
  // it('has a testing route', () => {
  //   return request(app)
  //     .get('/you')
  //     .query({ name: 'cari' })
  //     .then(res => {
  //       expect(res.body).toEqual({ hi: 'there cari' });
  //     });
  // });

  // POSTing data
  // it('has a POST route', () => {
  //   return request(app)
  //     .post('/note')
  //     .send({ text: 'Im a note' }) 
  //     .then(res => {
  //       expect(res.status).toEqual(204);
  //     });
  // });

  // rick and morty character by ID
  // it('can return JSON that displays character details by ID', () => {
  //   return request(app)
  //     .get('/character/1')
  //     .then(res => {
  //       expect(res.body).toEqual({
  //         name: 'Rick Sanchez',
  //         species: 'Human',
  //         status: 'Alive'
  //       });
  //     });
  // });

  // Rick and Morty notes
  // it('', () => {});
});
