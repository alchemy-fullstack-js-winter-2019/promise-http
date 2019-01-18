
const fsPromises = require('fs').promises;
const promiseCheck = require('./promiseCheck');

describe('promiseCheck', () => {
  it('returns true if it is a promise', () => {
    expect(promiseCheck(fsPromises.readFile('./promises.js'))).toBeTruthy();
  });

  it('returns false if it is not a promise', () => {
    expect(promiseCheck({})).toBeFalsy();
  });
});
