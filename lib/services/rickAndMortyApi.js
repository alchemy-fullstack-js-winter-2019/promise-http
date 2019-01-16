const request = require('superagent');

// rick and morty characters
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

// const getCharacters = () => {
//   return request
//     .get('https://rickandmortyapi.com/api/character/')
//     .then(res => {
//       // console.log(res.body.results.map(body => body.status));
//       return res.body.results.map(body => 
//         'name: ' + body.name + ', ' +
//         'status: ' + body.status + ', ' +
//         'species: ' + body.species);
//     });
// };

module.exports = {
  getCharacter,
  // getCharacters
};
