const request = require('superagent');

// rick and morty characters
const getCharacter = id => {
  return request
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => {
      return {
        name: res.body.name,
        status: res.body.status,
        species: res.body.species
      };
    });
};

const getCharacters = () => {
  return request
    .get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      return res.body.results.map(body => body.name);
    });
};

module.exports = {
  getCharacter,
  getCharacters
};
