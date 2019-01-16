const request = require('superagent');

const getCharacters = () => {
  return request
    .get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      return res.body.results.map(character => ({
        name: character.name,
        status: character.status,
        species: character.species
      }));
    });  
};

module.exports = { getCharacters };
