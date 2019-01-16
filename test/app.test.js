const request  = require('supertest');
const app = require('../lib/app');

describe('test app', () => {
    it('has a testing route', () => {
        return request(app)
            .get('/tester')
            .then(res => {
                expect(res.body).toEqual({ testing: 123 });
            });
    });
    it('can response based on a query string', () => {
        return request(app) 
            .get('/you?name=lance')
            // .query({ name: 'lance' })
            .then(res => {
                expect(res.body).toEqual({ hi: 'there lance' });
            });
    });
    it('it can post data', () => {
        return request(app)
            .post('./notes')
            .send({ text: 'Im a note' })
            .then(res => {
                expect(res.status).toEqual(204);
            });
    });

});


