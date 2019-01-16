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

// const getCharacter = request => {
//   return request
//     .get('https://rickandmortyapi.com/api/character/')
//     .then(res => {
//       return res;
//     })
// }

module.exports = { getCharacter };
