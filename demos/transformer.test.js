const { removeCaps, transform } = require('./transformer');

describe('transformer', () => {
  it('transforms some file', () => {
    return transform('./demos/transform.txt')
      .then(transTxt => {
        expect(transTxt).toEqual('EREH I');
      });
  });

  it('removes capital letters', () => {
    expect(removeCaps('Hi There')).toEqual('i here');
  });
});
