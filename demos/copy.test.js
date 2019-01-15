const copy = require('./copy');
const fsPromises = require('fs').promises;

describe('copy', () => {
  afterEach(() => {
    return fsPromises.unlink('./promises-copy.md');
  });

  it('copies a file', () => {
    return copy('./promises.md', './promises-copy.md')
      .then(() => {
        expect(fsPromises.readFile('./promises-copy.md')).toEqual(fsPromises.readFile('./promises.md'));
      })
      .then((httpMd, httpCopyMd) => {
        expect(httpMd).toEqual(httpCopyMd);
      })
  });

  it('copies a file with Promise.all', () => {
    return copy('./promises.md', './promises-copy.md')
      .then(() => {
        return Promise.all([
          fsPromises.readFile('./promises.md'),
          fsPromises.readFile('./promises-copy.md')
        ])
        .catch(err => expect(err).toBeFalsy());
      });
  });
});
