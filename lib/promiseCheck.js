const fs = require('fs');

fsPromises.readFile('./http.md', { encoding: 'utf8' })
  .then(data => fsPromises.wFile('./http-copy.md', data))