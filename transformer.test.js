const { 
  transformer,
  removeCapitals,
  makeAllLettersCapital,
  reverse,
  trim
} = require('./transformer');

describe('transformer', () => {

  it('removes capitals', () => {
    const value = removeCapitals('Hi There');
    expect(value).toEqual('i here');
  });

  it('makes a string into all capitals', () => {
    const value = makeAllLettersCapital(' i here');
    expect(value).toEqual(' I HERE');
  });

  it('reverses a string', () => {
    const value = reverse(' I HERE');
    expect(value).toEqual('EREH I ');
  });

  it('trims a string', () => {
    const value = trim('EREH I ');
    expect(value).toEqual('EREH I');
  });  

  it('transforms some file', () => {
    return transformer('./transform.txt')
      .then(transformTxt => {
        expect(transformTxt).toEqual('EREH I');
      });
  });
});
