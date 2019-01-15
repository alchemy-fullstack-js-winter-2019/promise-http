const { copyFile } = require('./promises');
const fs = require('fs');

describe('copy', () => {
  it('copies a file', () => {
    // Return Promise
    return copyFile('./http.md', './http-copy.md')
      .then(() => {
        // Then use all method on Promise class && pass readFile to array
        Promise.all([fs.Promises.readFile('./http.md'), fs.Promises.readFile('./http-copy.md')])
          // Then destructure the files
          .then(([httpMd, httpCopyMd]) => {
            // Then expect them to be equal
            expect(httpMd).toEqual(httpCopyMd);
          });
      });
  });
});
