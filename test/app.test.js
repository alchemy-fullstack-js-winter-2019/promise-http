const app = require('../lib/app');
const request = require('supertest');

describe('app', () => {
  it.skip('has a tester route', () => {
    return request(app)
      .post('/note')
      .send({ text: 'Im a note' })
      .then(res => {
        expect(res.status).toEqual(204);
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
