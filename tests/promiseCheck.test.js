const promiseCheck = require('../promiseCheck');
const fsPromises = require('fs').promises;

describe('promiseCheck', () => {
  it('returns true if you pass it a promise', () => {
    expect(fsPromises.readFile('./http.md')).toBeTruthy();
  });

  it('returns false if you pass it a non-promise', () => {
    expect(fsPromises({})).toBeFalsy();
  });
});
