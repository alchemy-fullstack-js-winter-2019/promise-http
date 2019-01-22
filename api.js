const request = require('superagent');

request
  .get('https://rickandmortyapi.com/api/character/')
  .then(res => {
    console.log(res.body.results)
      .map(character => character.origin.url)
      .filter(originUrl => originUrl !== '');
  })
  .then(originUrls => {
    // iterate thru originUrls
    return Promise.all(originUrls.map(url => {
      // -> request.get(url)
      return request.get(url);
    // -> -> console.log(originJson)
    }));
    

  })
  .then(originRess => originRess.map(originRes => originRes.body))
  .then(origins => console.log(origins));
