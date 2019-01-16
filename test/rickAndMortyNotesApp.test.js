const request = require('supertest');
const app = require('../lib/rickAndMortyNotesApp');

jest.mock('../lib/services/rickAndMortyGetCharactersApi.js');

describe('rick and morty notes app', () => {
  it('has a tester route', () => {
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
});
