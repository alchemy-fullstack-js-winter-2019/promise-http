const request = require('supertest');
const app = require('../lib/app');

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
  it('has a tester route', () => {
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


