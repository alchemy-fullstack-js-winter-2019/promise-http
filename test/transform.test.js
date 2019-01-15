const transformer = require('../lib/transform');



describe('does things', () => {
    it('transforms a file', () => {
        return transformer('./transform.txt')
            .then(transTxt => {
                expect(transTxt).toEqual('POOUU');
            });
    });
});

