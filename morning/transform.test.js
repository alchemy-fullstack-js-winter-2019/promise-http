const transformer = require('./transform');



describe('does things', () => {
    it('transforms a file', () => {
        return transformer('./transform.txt')
            .then(transTxt => {
                expect(transTxt).toEqual('POOUU');
            });
    });
});


