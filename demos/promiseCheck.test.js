const promiseCheck = require('./promiseCheck');
const fsPromises = require('fs').promises;

describe('promiseCheck', () => {
  it('returns true for promises passed to it', () => {
    expect(promiseCheck(fsPromises.readFile('./promises.md'))).toBeTruthy();
  });
  it('returns false for non-promises passed to it', () => {
    expect(promiseCheck({})).toBeFalsy();
  });
});
