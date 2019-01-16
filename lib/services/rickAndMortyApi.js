// const request = require('superagent');

// const getCharacter = id => {
  
// };

// module.exports = {
//   getCharacter
// };

module.exports = id => {
  return request
    .get('https://rickandmorty...')
    .then(res => ({
      name: res.body.name,
      species: res.body.species,
      status: res.body.status
    }));
};