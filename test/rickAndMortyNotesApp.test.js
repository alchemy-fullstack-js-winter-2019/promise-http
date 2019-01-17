const request = require('supertest');
const app = require('../lib/rickAndMortyNotesApp');

jest.mock('../lib/services/rickAndMortyGetCharactersApi.js');

describe('rick and morty notes app', () => {
  beforeEach(() => {
    return request(app)
      .post('/characters')
      .send({ characterId: 2, note: 'FOOTBALL TEAMS!' });
  });
  
  it('can list the characters on the characters route', () => {
    return request(app)
      .get('/characters')
      .then(res => {
        expect(res.text).toContain(
          `
          <html>
            <body>
              <ul>
                
            <li>Rick Sanchez, Alive, Human</li>
            <li>Morty Smith, Alive, Human</li>
              </ul>
            </body>
          </html>`  
        );
      });
  });

  it('can post notes', () => {
    return request(app)
      .post('/characters')
      .send({ characterId: 1, note: 'My favorite character' })
      .then(res => {
        expect(res.statusCode).toEqual(200);
      });
  });

  it('can display notes for characters', () => {
    return request(app)
      .get('/characters/1')
      .then(res => {
        expect(res.text).toEqual(
        //eslint-disable-next-line
      `
        <html>
          <body>
            </ul>
              <li>
                Go walk the dog
              </li><li>
                My favorite character
              </li>
            </ul>
          </body>
        </html>`
        );
      });
  });
});
