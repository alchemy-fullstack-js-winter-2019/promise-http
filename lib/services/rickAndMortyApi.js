const request = require('superagent');

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
      return res.body.results.map(character => {
        // console.log(character);
        return {
          name: character.name,
          status: character.status,
          species: character.species
        };
      });
    });
};

module.exports = { getCharacter, getCharacters };
