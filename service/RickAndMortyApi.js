const request = require ('superagent');
const { getCharacter } = require('../tests/rickAndMortyApi.test');

const getCharacter = id => {
  request
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => ({
      name: res.body.name,
      species: res.body.species,
      status: res.body.status
    }));
};

module.exports = {
  getCharacter
};
