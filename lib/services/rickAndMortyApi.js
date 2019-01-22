const request = require('superagent');

const getCharacter = id => {
  return request
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(character => {
      return {
        name: `${character.body.name}`,
        status:`${character.body.status}`,
        species: `${character.body.species}`
      };
    });

};

const getCharacters = () => {
  return request
    .get('https://rickandmortyapi.com/api/character/')
    .then(res => {
      return res.body.results.map(char => ({
        name: char.name,
        status: char.status,
        species: char.species

      }));

    });

};

module.exports = {
  getCharacter, 
  getCharacters
};
