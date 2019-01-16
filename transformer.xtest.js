const {
  transformer,
  removeCapitals
} = require('./transformer');

describe('transformer', () => {
  it('transofrms some file', () => {
    return transformer('./transform.txt')
      .then(transTxt => {
        
        expect(transTxt).toEqual('EREH I');
      });
  });

  it('removes capital letters', () => {
    expect(removeCapitals('Hi There')).toEqual('ereh i');
  });
});