module.exports = {
  getCharacter() {
    return Promise.resolve({
      name: 'Rick Sanchez',
      species: 'Human',
      status: 'Alive'
    });
  },
  getCharacters() {
    return Promise.resolve([
      {
        name: 'Rick Sanchez',
        status: 'Human',
        species: 'Alive'
      },
      {
        name: 'Morty Smith',
        status: 'Alive',
        species: 'Alive'
      }
    ]);
  }
};
