const request = require('superagent');


const getCharacter = id => {
  // console.log('this is the id', id);
  return request
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => ({
    // console.log('this is the name', res.body.name); create return empty object to gather consol.log info
      // return {} = response.body.name;
      name: res.body.name,
      status: res.body.status,
      species: res.body.species
    }));

};
const getCharacters = () => {
  return request
    .get('https://rickandmortyapi.com/api/character')
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
  getCharacters,
 
};
