const request = require('superagent');

const getCharacter = id => {
  return request
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => {
      // console.log('response', res.body);
      return {
        name: res.body.name,
        species: res.body.species,
        status: res.body.status
      };
    });
};
const getCharacters = () => {
  return request
    .get('https://rickandmortyapi.com/api/character')
    .then(res => {
      return res.body.results.map(char => ({
        name: char.name,
        species: char.species,
        status: char.status
      }));
    });
};
module.exports = {
  getCharacter,
  getCharacters
};





