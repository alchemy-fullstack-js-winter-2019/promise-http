const request = require('superagent');

request
  .get('https://rickandmortyapi.com/api/character/')
  .then(res => {
    res.body.results
      .map(character => character.origin.url)
      .filter(originUrl => originUrl !== '');
  })
  .then(originUrls => {
    // iterate through the originUrls
    return Promise.all(originUrls.map(url => {
      // -> request.get(url)
      return request.get(url);
    }));
  })
  .then(originRess => originRess.map(originRes => originRes.body)) // get body only
  /* eslint-disable-next-line */
  .then(origins => console.log(origins)); // -> -> console.log(originJson)