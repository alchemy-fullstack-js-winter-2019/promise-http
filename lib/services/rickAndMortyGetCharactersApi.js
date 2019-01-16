const request = require('superagent');

const getCharacters = () => {
  return request
    .get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      return res.body.results.map(body => body.name);
    });  
};

module.exports = { getCharacters };
