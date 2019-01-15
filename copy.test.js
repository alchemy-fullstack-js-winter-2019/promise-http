const fsPromises = require('fs').promises;
import { copy, fsPromises } from 'fs';

afterEach(() => {
  //remove the copied file

});

describe('copy', () => {
  it('copies a file', () => {
    return copy('./http.md', './http-copy.md')
      .then(() => {

        return Promise.all([
          fsPromises.readFile('./http.md'),
          fsPromises.readFile('./http-copy.md')
        ])
        .then(([httpMd, httpCopyMd]) ={
          expect(httpMd).toEqual(httpCopyMd);
        })
        .catch(err => expect(err).toBeFalsy());
        
      });
  });
});
