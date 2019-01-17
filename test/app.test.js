const request = require('supertest');
const app = require('../lib/app');

jest.mock('../lib/rickAndMortyApi.js');
describe('app', () => {
  it('has a testing route', () => {
    return request(app)
      .post('/note')
      .send({ text: 'Hey Jei' })
      .then(res => {
        expect(res.status).toEqual(204);
      });
  });
  it('can get a query string', () => {
    return request(app)
      .get('/you?name=jei')
      .then(res => {
        expect(res.body)/toEqual({ text: 'Hey Jei' })
      })
  })
})
)};

describe('app', () => {
  it('can get character from id', () => {
    return request(app)
      .get('/character/1')
      .then(res => {
        expect(res.body).toEqual({
          name: 'Rick Sanchesz',
          species: 'Human',
          status: 'Alive'
        });
      });
  });
});
 