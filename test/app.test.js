const request = require('supertest');
const app = require('../lib/app');

describe('app', () => {
  // server and app
  // it('has a testing route', () => {
  //   return request(app)
  //     .get('/tester')
  //     .then(res => {
  //       expect(res.text).toEqual('testing123');
  //     });
  // });

  // json app
  // it('has a testing route', () => {
  //   return request(app)
  //     .get('/tester')
  //     .then(res => {
  //       expect(res.body).toEqual({ testing: 123 });
  //     });
  // });

  // Query Strings
  // it('has a testing route', () => {
  //   return request(app)
  //     .get('/you')
  //     .query({ name: 'cari' })
  //     .then(res => {
  //       expect(res.body).toEqual({ hi: 'there cari' });
  //     });
  // });

  // POSTing data
  it('has a POST route', () => {
    return request(app)
      .post('/note')
      .send({ text: 'Im a note' }) 
      .then(res => {
        expect(res.status).toEqual(204);
      });
  });
});
