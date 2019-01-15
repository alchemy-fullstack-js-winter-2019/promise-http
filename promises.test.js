/*eslint-disable no-console*/
const copyFile  = require('./copy');
const fsPromise = require('fs').promises;

describe('copy', () => {
  afterEach(() => {
    return fsPromise.unlink('./http-copy.md');
  });

  it('copies a file', () => {
    // Return Promise
    return copyFile('./http.md', './http-copy.md')
      .then(() => {
        // Then use .all method on Promise class && pass readFile to array
        Promise.all([
          fsPromise.readFile('./http.md'), 
          fsPromise.readFile('./http-copy.md')
        ])
          // Then destructure the files
          .then(([httpMd, httpCopyMd]) => {
            // Then expect them to be equal
            expect(httpMd).toEqual(httpCopyMd);
          })
          .catch(err => expect(err).toBeFalsy());
      });
  });
});
