const checker = require('../lib/promiseCheck.js');
describe('it checks if a promise is returned', () => {
    it('returns true or false checking for a promise', () => {
        const promise = function(x) {
            return x * 2;
        }.then(console.log('done'));
        const notAPromise = function(x){
            return x * 2;
        };
        expect(checker(promise)).toBeTruthy;
        expect(checker(notAPromise)).toBeFalsy;
    });
});


