const request = require('superagent');

// request
//   .get('https://rickandmortyapi.com/api/character/')
//   .then(res => console.log(res.body.results[res.body.results.length - 1]))
//   .catch(err => {
//     throw err;
//   });

request
  .get('https://rickandmortyapi.com/api/character/')
  .then(res => {
    return res.body.results
      .map(character => character.origin.url)
      .filter(originUrl => originUrl !== '');
  })
  .then(originUrls => {
    return Promise.all(originUrls.map(url => {
      return request.get(url);
    }));
  })
  .then(originRess => originRess.map(originRess => originRess.body)) // get body only
  .then(origins => console.log(origins))
  .catch(err => {
    throw err;
  });
