/*eslint-disable no-console*/
const request = require('superagent');

const getCharacter = id => {
  return request
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(character => {
      return {
        name: character.body.name,
        status: character.body.status,
        species: character.body.species
      };
    });
};

const getCharacters = () => {
  return request
    .get('https://rickandmortyapi.com/api/character')
    .then(res => {
      const json = res.body;
      const results = json.results;
      return results.map(character => ({
        name: character.name, 
        status: character.status, 
        species: character.species 
      }));
    });
};

module.exports = { 
  getCharacter,
  getCharacters 
};
