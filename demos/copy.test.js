const copy = require('./copy');
const fsPromises = require('fs').promises;

describe('copy', () => {
  afterEach(() => {
    fsPromises.unlink('./promises-copy.md');
  });

  it('copies a file', () => {
    return copy('./promises.md', './promises-copy.md')
      .then(() => {
        expect(fsPromises.readFile('./promises-copy.md')).toEqual(fsPromises.readFile('./promises.md'));
      })
      // .then();
    });
});
