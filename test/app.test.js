const request = require('supertest');
const app = require('../lib/app');

jest.mock('../lib/services/rickAndMortyApi.js');

describe('app', () => {

  describe('Rick and Morty notes', () => {
    // GET /characters return HTML that displays a list of characters
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
    // POST /characters saves a note to the notes object
    it('has a POST route and can save notes by characterId', done => {
      return request(app)
        .post('/characters')
        .send({
          characterId: 11, 
          note: 'Rad character' 
        })
        .then(() => {
          return request(app)
            .post('/characters')
            .send({
              characterId: 11, 
              note: 'another note about same character' 
            });
        })
        .then(() => {
          return request(app)
            .post('/characters')
            .send({
              characterId: 12, 
              note: 'Different character note' 
            });
        })
        .then(res => {
          expect(res.status).toEqual(204);
          done();
        });
    });
    // GET /characters/:id displays a character and all saved notes about them
    it('can retrieve saved notes for a characterId', () => {
      return request(app)
        .post('/characters')
        .send({ characterId: 100, note: 'This character rocks' })
        .then(() => {
          return request(app)
            .get('/characters/100');
        })
        .then(res => {
          expect(res.text).toContain('This character rocks');
        });
    });
    it('can display error if no notes saved for a characterId', () => {
      return request(app)
        .get('/characters/1111')
        .then(res => {
          expect(res.text).toContain('No notes saved for character 1111');
        });
    });
  });

  describe('rick and morty characters', () => {
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
  });

  describe('POSTing data', () => {
    // POSTing data
    it('has a POST route for adding notes', () => {
      return request(app)
        .post('/note')
        .send({ text: 'Im a note' }) 
        .then(res => {
          expect(res.status).toEqual(204);
        });
    });
  });

  describe('Query Strings', () => {
    // Query Strings
    it('has a query strings testing route', () => {
      return request(app)
        .get('/you')
        .query({ name: 'cari' })
        .then(res => {
          expect(res.body).toEqual({ hi: 'there cari' });
        });
    });
  });

  describe('server and app, json app', () => {
    it('has a server and app testing route', () => {
      return request(app)
        .get('/tester-text')
        .then(res => {
          expect(res.text).toEqual('testing123');
        });
    });
    it('has a json app testing route', () => {
      return request(app)
        .get('/tester-json')
        .then(res => {
          expect(res.body).toEqual({ testing: 123 });
        });
    });
  });

  // NOT FOUND
  it('displays error when path not found', () => {
    return request(app)
      .get('/baddabingbaddaboom')
      .then(res => {
        expect(res.status).toEqual(404);
      });
  });

});
