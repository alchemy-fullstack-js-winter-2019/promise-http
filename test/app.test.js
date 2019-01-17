const request = require('supertest');
const app = require('../lib/app');

jest.mock('../lib/services/rickAndMortyApi.js');

describe('app', () => {

  it('can take a query string', () => {
    return request(app)
      .get('/you?name=unclebob')
      .then(res => {
        expect(res.body).toEqual({ text: 'hi there unclebob' });
      });
  });

  it('can get character based on id', () => {
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

  it('can return all characters', () => {
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

  it.only('can post a note to a specific character', () => {
    return request(app)
      .post('/character')
      .send({ characterId: 1, note: 'My favorite character' })
      .then(res => {
        expect(res.status).toEqual(204);
      });
  });

  it('can get the notes for a specific character', () => {

  });
});
