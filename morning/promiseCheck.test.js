const checker = require('./promiseCheck.js');
const fsPromises = require('fs').promises;


describe('promiseCheck', () => {
    it('returns true if it is a promise', () => {
        expect(checker(fsPromises.readFile('./http.md'))).toBeTruthy();
    });
  
    it('returns false if it is not a promise', () => {
        expect(checker({})).toBeFalsy();
    });
});
