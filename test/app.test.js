const request = require('supertest');
const app = require('../lib/app');

jest.mock('../lib/services/rickAndMortyApi.js', () => ({
  getCharacter() {
    return Promise.resolve({
      name: 'Rick Sanchez',
      species: 'Human',
      status: 'Alive'
    });
  },
  getCharacters() {
    return Promise.resolve([
      {
        name: 'Rick Sanchez',
        status: 'Human',
        species: 'Alive'
      },
      {
        name: 'Morty Smith',
        status: 'Alive',
        species: 'Alive'
      }
    ]
    );
  }
}));

describe('app', () => {
  // TOP CHUNK
  describe('top module.exports chunk', () => {
    // server and app
    it('has a server and app testing route', () => {
      return request(app)
        .get('/tester123')
        .then(res => {
          expect(res.text).toEqual('testing123');
        });
    });
  
    // json app
    it('has a json app testing route', () => {
      return request(app)
        .get('/tester')
        .then(res => {
          expect(res.body).toEqual({ testing: 123 });
        });
    });
  
    // Query Strings
    it('has a query strings testing route', () => {
      return request(app)
        .get('/you')
        .query({ name: 'cari' })
        .then(res => {
          expect(res.body).toEqual({ hi: 'there cari' });
        });
    });
  
    // POSTing data
    it('has a POST route', () => {
      return request(app)
        .post('/note')
        .send({ text: 'Im a note' }) 
        .then(res => {
          expect(res.status).toEqual(204);
        });
    });
  
    // rick and morty character by ID
    it('can return JSON that displays character details by ID', () => {
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
  
    // Rick and Morty notes
    it('can return HTML that displays all characters on pg1', () => {
      return request(app)
        .get('/characters/')
        .then(res => {
          expect(res.text).toString(`
          <html>
            <body>
              <li>name: Rick Sanchez, status: Alive, species: Human</li>
              <li>name: Morty Smith, status: Alive, species: Human</li>
            </body>
          </html>
          `);
        });
    });
  });


  // BOTTOM CHUNK
  // POST to /characters
  // describe('bottom module.exports chunk', () => {
  //   it('has a POST route', () => {
  //     return request(app)
  //       .post('/characters')
  //       .send({ characterId: 1234, note: 'My favorite character' }) 
  //       .then(res => {
  //         expect(res.status).toEqual(204);
  //       });
  //   });
  // });

});
