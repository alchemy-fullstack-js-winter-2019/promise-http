const copy = require('./copy');
const fs = require('fs');
const fsPromises = require('fs').promises;

describe('copy', () => {
  afterEach(() => {
    return fsPromises.unlink('./http-copy(1).md');
  });

  it('copies a file', () => {
    return copy('./http.md', './http-copy(1).md')
      .then(() => {

        // expect(fs.readFileSync('./http.md)).toEqual(fs.readFileSync('./http-copy(1).md'));

        return Promise.all([
          fsPromises.readFile('./http.md'),
          fsPromises.readFile('./http-copy(1).md')
        ]);
      })
      .then(([httpMd, httpCopyMd]) => {
        // expect httpMd to equal httpCopyMd
        expect(httpMd).toEqual(httpCopyMd);
      })
      .catch(err => expect(err).toBeFalsy());
  });
});