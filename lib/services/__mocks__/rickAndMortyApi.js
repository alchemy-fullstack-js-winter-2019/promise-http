module.exports = {
  getCharacter() {
    return Promise.resolve({
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human'
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
