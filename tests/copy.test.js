/* eslint-disable no-unused-vars */
const fsPromises = require('fs').promises;
const copy = require('../lib/copy');
const fs = require('fs');

afterEach(() => {
  return fsPromises.unlink('./http-copy.md');
});

describe('copy', () => {
  it('copies a file', () => {
    return copy('./http.md', './http-copy.md')
      .then(() => {

        return Promise.all([
          fsPromises.readFile('./http.md'),
          fsPromises.readFile('./http-copy.md')
        ]);
      })
      .then(([httpMd, httpCopyMd]) => {
        expect(httpMd).toEqual(httpCopyMd);
      })
      .catch(err => expect(err).toBeFalsy());
        
  });
});
