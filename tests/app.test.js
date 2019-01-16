const request = require('supertest');
const app = require('../lib/app');

jest.mock('../service/__mocks__/rickAndMortyApi.js');

describe('app', () => {

  it('gets a character by id', () => {
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
});
