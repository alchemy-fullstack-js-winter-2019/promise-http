const promiseCheck = require('../lib/promiseCheck');
const fsPromises = require('fs').promises;

describe('promiseCheck' () => {
  it('returns true if it is a promise', () => {
    expect(promiseCheck(fsPromise.readFile('./http')))
  });
});
