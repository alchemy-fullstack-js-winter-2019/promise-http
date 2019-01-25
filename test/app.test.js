const request = require('supertest');
const app = require('../lib/app');

jest.mock('../lib/service/rickAndMortyApi.js');

describe('app', () => {
  it('has a testing route', () => {
    return request(app)
      .post('/note')
      .send({ text: 'testing 1234' })
      .then(res => {
        expect(res.status).toEqual(204);
      });
  });

  it('can take a query string', () => {
    return request(app)
      .get('/you?name=')
      .then(res => {
        expect(res.body).toEqual({ text: 'howdy' });
      });
  });

  it('can get character by id', () => {
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

  it('can get all characters', () => {
    return request(app)
      .get('/character')
      .then(res => {
        expect(res.text).toEqual(`<html>
        <body><div>
              <p>Name: Rick Sanchez</p>
              <ul>
                <li>Status: Alive</li>
                <li>Species: Human</li>
              </ul>
            </div><div>
              <p>Name: Morty Smith</p>
              <ul>
                <li>Status: Alive</li>
                <li>Species: Human</li>
              </ul>
            </div></body>
        </html>`);
      });
  });
});
