const request = require('superagent');

const getCharacter = id => {
  return request 
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => ({
      name: res.body.name,
      species: res.body.species,
      status: res.body.status
    // return res.body.results
    //   .map(character => character)
    //   .filter;
    }));
};

  
module.exports = {
  getCharacter
};
