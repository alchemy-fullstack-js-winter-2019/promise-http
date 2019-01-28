const request = require('superagent');

request
  .get('https://rickandmortyapi.com/api/character/')
  .then(res => {
    // console.log(res.body.results[0]);
    return res.body.results
      .map(character => character.origin.url)
      .filter(originURL => originURL !== '');

  })
  .then(originURLs => {
    //iterate through all origin urls()
    return Promise.all(originURLs.map(url => {
      return request.get(url);
    }));
  })
  .then(originRess => originRess.map(originRes => originRes.body))//get body only 
  .then(origins => console.log(origins)); // ->  -> consoloe.log(originJson)

  
