/*eslint-disable no-console*/

const request = require('superagent');

// res = response object
request
  // Get list of characters
  .get('https://rickandmortyapi.com/api/character/')
  .then(res => {
    // Return a list of results to iterate over and return the character origin url
    return res.body.results
      .map(char => char.origin.url)
      // Filter out characters without a url listed
      .filter(originUrl => originUrl !== '');
  })
  // Then take the urls and pass them into a Promise.all
  // -> map over them and send a request for each url individually
  .then(originUrls => {
    return Promise.all(originUrls.map(url => {
      return request.get(url);
    }));
  })
  .then(originRess => originRess.map(originRes => originRes.body))
  .then(origins => console.log(origins));
