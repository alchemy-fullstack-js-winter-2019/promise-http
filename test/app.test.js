const request = require('supertest');
const app = require('../lib/app');

// jest.mock('../lib/services/rickAndMortyApi.js', () => ({
//   getCharacter() {
//     // return a promise
//     return Promise.resolve({
//       name: 'Rick Sanchez',
//       species: 'Human',
//       status: 'Alive'
//     });
//     // promise should resolve with { name, status, species }
//     // HINT: look and use Promise.resolve()
//   }
// }));

// Server and App test
// describe('app', () => {
//   it('has a tester route', () => {
//     return request(app)
//       .get('/tester')
//       .then(res => {
//         expect(res.text).toEqual('testing123');
//       });
//   });
// });

// JSON App test
// describe('app', () => {
//   it('has a tester route', () => {
//     return request(app)
//       .get('/tester')
//       .then(res => {
//         expect(res.body).toEqual({ testing:123 });
//       });
//   });
// });


// // Query String
// describe('app', () => {
//   it('has a tester route', () => {
//     return request(app)
//       .get('/tester')
//       .query({ name: 'carmen '})
//       .then(res => {
//         expect(res.body).toEqual({ hi: 'there carmen' });
//       });
//   });
// });


// describe('app', () => {
//   it('has a tester route', () => {
//     return request(app)
//       .post('/note')
//       .send({ text: 'Im a note' })
//       .then(res => {
//         expect(res.status).toEqual(204);
//       });
      
//   });

describe('app', () => {
  it('gets a character', () => {
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

  it('gets a character by id', () => {
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

  it('gets a list of characters', () => {
    return request(app)
      .get('/characters')
      .then(res => {
        console.log(res.text);
        expect(res.text).toBeTruthy();
        expect(res.text).toEqual('<html><body><li> Rick Sanchez </li><li> Morty Smith </li><li> Summer Smith </li><li> Beth Smith </li><li> Jerry Smith </li><li> Abadango Cluster Princess </li><li> Abradolf Lincler </li><li> Adjudicator Rick </li><li> Agency Director </li><li> Alan Rails </li><li> Albert Einstein </li><li> Alexander </li><li> Alien Googah </li><li> Alien Morty </li><li> Alien Rick </li><li> Amish Cyborg </li><li> Annie </li><li> Antenna Morty </li><li> Antenna Rick </li><li> Ants in my Eyes Johnson </li></body></html>');
      });
  });

  it('can post a note to a specific character', () => {
    return request(app)
      .post('/characters')
      .send({ characterId: 1234, note: 'My favorite character' })
      .then(res => {
        expect(res.status).toEqual(204);
      });
  });

  // it('gets notes for a character', () => {
  //   return request(app)
  //     .post('/characters')
  //     .send({ characterId: 1, note: 'Great character' })
  //     .then(() => {
  //       return request(app)
  //         .get('/characters/1');

  //     })
  //     .then(res => {
  //       expect(res.text).toContain('Great character');
  //     });

  // });
});



