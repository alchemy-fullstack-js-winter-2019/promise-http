const app = require('../lib/app');
const request = require('supertest');

jest.mock('../lib/service/rickAndMortyApi.js');


describe('app', () => {
  it('writes a list of characters to browser', () => {
    return request(app)
      .get('/characters')
      .then(res => {
        console.log('test', res.text);
        expect(res.text).toEqual(
          `<html><body><ul><li>Name: Rick Sanchez, Status: Alive, Species: Human</li>,<li>Name: Morty Smith, Status: Alive, Species: Human</li></ul></body></html>`
        );
      });
  });
});





// describe('app', () => {
//   it('has a tester route', () => {
//     return request(app)
//       .post('/note')
//       .send({ text: 'Im a note' })
//       .then(res => {
//         expect(res.status).toEqual(204);
//       });
//   });
// });
