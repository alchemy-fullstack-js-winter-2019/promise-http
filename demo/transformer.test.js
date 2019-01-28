const transformer = require('./transformer');

describe('transformer', () => {
  it('transforms some file', () => {
    return transformer('./demo/transform.txt')
      .then(transTxt => {
        expect(transTxt).toEqual('EREH I');
      });
  });
});
