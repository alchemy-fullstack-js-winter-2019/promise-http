const fs = require('fs').promises;
const promiseCheck = require('./promiseCheck');

describe.skip('promisecheck', () => {
  it('returns true if it is a promise', () => {
    expect(promiseCheck(fs.readFile('./http.md'))).toBeTruthy();
  });
  it('returns false if it is not a promise', () => {
    expect(promiseCheck({})).toBeFalsy();
  });
});
