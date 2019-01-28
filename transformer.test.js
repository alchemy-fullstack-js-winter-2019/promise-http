const {
  transformer,
  removeCapitals,
} = require('./transformer');


describe.skip('transformer', () => {
  it('transforms txt a file', () => {
    return transformer('./transform.txt')
      .then(transTxt => {
        expect().toEqual();
        expect().toEqual();
        expect().toEqual();
        expect(transTxt).toEqual('EREH I');
      });
  });
  it('removes capital letters', () => {
    expect(removeCapitals('Hi There')).toEqual('i here');
  });
});
