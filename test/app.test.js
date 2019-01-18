const request  = require('supertest');
const app = require('../lib/app');

jest.mock('../lib/services/rickAndMortyApi');

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
            .then(res => {
                expect(res.body).toEqual({ hi: 'there lance' });
            });
    });
    it('it can post data', () => {
        return request(app)
            .post('/notes')
            .send({ text: 'Im a note' })
            .then(res => {
                expect(res.status).toEqual(204);
            });
    });

    it('can return json based on an ID form URL', () => {
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
    it('can return a list of characters in HTML form', () => {
        return request(app)
            .get('/characters')
            .then(res => {
                expect(res.text).toHaveLength(737);
            });
    });
    it('add property note to character based on ID', () => {
        return request(app)
            .post('/characters')
            .send({ characterId: 1234, note: 'My favorite character' })
            .then(res => {
                expect(res.status).toEqual(204);
            });
    });
    it('can return information about a single character', () => {
        return request(app)
            .get('/characters/1')
            .then(res => {
                expect(res.text).toHaveLength(222);
            });


    });
});


