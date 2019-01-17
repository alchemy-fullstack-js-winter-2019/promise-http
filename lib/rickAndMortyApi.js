const request = require('superagent');

const getCharacter = id => {
  return request 
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => {
      return {
        name: res.body.name,
        species: res.body.species,
        status: res.body.status
        // return res.body.results
        //   .map(character => character)
        //   .filter;
      };
    });
};

const getCharacters = (id) => {
  return request
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => {
      return res.body.results.map(character => {
        return {
          name: character.name,
          species: character.species,
          status: character.status
        };
      });
    });
};

  
module.exports = {
  getCharacter,
  getCharacters
};
