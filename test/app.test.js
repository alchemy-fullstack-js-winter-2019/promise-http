const request = require('supertest');
const app = require('../lib/app');
// const bodyParser = require('../lib/bodyParser');

describe('app', () => {
  it('has a GET route for testing', () => {
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
  // it('has a POST route for testing', () => {
  //   return request(app)
  //     .post('/character')
  //     .send({ text: 'Im a note' })
  //     .then(res => {
  //       console.log('This is a response', res.body.text);
  //       // expect(character).toBeTruthy()

  //     });
  // });
});
