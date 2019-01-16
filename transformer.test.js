const { transformer } 
         = require('./transformer');

describe('Transformer', () => {
  it('transforms some file', () => {
    return transformer('./transform.txt')
      .then(transTxt => {
        expect(transTxt).toEqual('EREH I');
      });
  });
})
;
