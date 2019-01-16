/*eslint-disable no-console*/
const copy = require('./copy');
const fs = require('fs');
const fsPromises = require('fs').promises;

describe('copy function', () => {
  beforeEach(() => {
    fs.unlink('./test2.txt', () => {
      console.log('test2.text has been deleted');
    });
  });

  it('can use read and write to copy over a file to a given destination when given a source', () => {
    return copy('./promises.md', './test2.txt')
      .then(() => {
        expect(fs.readFileSync('./test2.txt')).toEqual(fs.readFileSync('./promises.md'));
      });
  });

  it('can use read and write to copy over a file to a given destination when given a source', () => {
    return copy('./promises.md', './test2.txt')
      .then(() => {
        return Promise.all([
          fsPromises.readFile('./test2.txt'),
          fsPromises.readFile('./promises.md')
        ]);
      })
      .then(([test2, promises]) => {
        expect(test2).toEqual(promises);
      })
      .catch((err) => {
        expect(err).toBeFalsy();
      });
  });
});
