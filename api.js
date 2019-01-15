const request = require('superagent');

request
  .get('https://rickandmortyapi.com/api/character/')
  .then(res => console.log(res.body.results[res.body.results.length - 1]))
  .catch(err => {
    throw err;
  });
