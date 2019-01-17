module.exports = {
  getCharacter() {
    // return a promise
    return Promise.resolve({
      name: 'Rick Sanchez',
      species: 'Human',
      status: 'Alive'
    });
  },
  getCharacters() {
    return Promise.resolve([{
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human'
    },
    {
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human'
    }]);
  }
};
