const request = require ('superagent');


const getCharacter = id => {
  return request
    .get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => ({
      name: res.body.name,
      species: res.body.species,
      status: res.body.status
    }));
};

const getCharacters = () => {
  return Promise.resolve([
    {
      name: 'Rick Sanchez',
      species: 'Human',
      status: 'Alive'
    },
    {
      name: 'Morty Smith',
      species: 'Human',
      status: 'Alive'
    }
  ]);
      
};

module.exports = {
  getCharacter,
  getCharacters
};
