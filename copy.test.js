const copy = require('./copy');
const fsPromises = require('fs').promises;

describe('copy', () => {
  afterEach(() => {
    // remove the copied file
    return fsPromises.unlink('test.txt');
  });

  it('copies a file', () => {
    return copy('.gitignore', 'test.txt')
      .then(() => {

        // expect(fs.readFileSync('.gitignore')).toEqual(fs.readFileSync('test.txt)') 
        
        // read .gitignore, test/text and return Promise.all
        return Promise.all([
          fsPromises.readFile('.gitignore'),
          fsPromises.readFile('test.txt')
        ]);
      })
      .then(([httpMd, httpCopyMd]) => {
        // expect httpMD to equal httpCopyMd
        expect (httpMd).toEqual(httpCopyMd);
      })
      .catch(err => expect(err).toBeFalsy());
  });
});

