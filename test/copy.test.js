const copy = require('../lib/copy');
const fsPromises = require('fs').promises;


describe('copy', () => {
    afterEach(() => {
        return fsPromises.unlink('./TEST.txt');
    });
    it('can copy and transform a file', () => {

        return copy('./http.md', './TEST.txt')
            .then(() => {
                return Promise.all([
                    fsPromises.readFile('./http.md'),
                    fsPromises.readFile('./TEST.txt')
                ]);
            })
            .then(([httpMd, TESTTxt]) => {
                expect(httpMd).toEqual(TESTTxt);
            });
    });
});
