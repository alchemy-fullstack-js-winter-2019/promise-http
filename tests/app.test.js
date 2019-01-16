const request = require('supertest');
const app = require('../lib/app');

jest.mock('../service/__mocks__/rickAndMortyApi.js');

describe('app', () => {

  it('responds to a POST on /note', () => {
    return request(app)
      .post('/character/1')
      .send({ text: 'This is a note' })
      .then(res => {
        expect(res.body).toEqual({
          name: 'Rick Sanchez',
          species: 'Human',
          status: 'Alive'
        });
      });

  });

  // it('has a tester route', () => {
  //   return request(app)
  //     .get('/you')
  //     .then(res => {
  //       expect(res.text).toEqual('testing: 123');
  //     });
  // });
});
