const copy = require('./copy');
const fs = require('fs');
const fsPromises = require('fs').promises;

describe('copy', () => {
  afterEach(() => {
    delete('./.travis-copy.yml');
    return fsPromises.unlink('./.travis-copy.yml');
  });
  it('copies a file', () => {
    return copy('./.travis.yml', './.travis-copy.yml')
      .then(() => {
        expect(fs.readFileSync('./.travis.yml')).toEqual(fs.readFileSync('./.travis-copy.yml'));
        return Promise.all([
          fsPromises.readFile('./.travis.yml'),
          fsPromises.readFile('./.travis-copy.yml')
        ]);
      })
      .then(([travisYml, travisCopyYml]) => {
        //expect travisYml to equal travisCopyYml
        expect(travisYml).toEqual(travisCopyYml);
      })
      .catch(err => expect(err).toBeFalsy());
  });
});
