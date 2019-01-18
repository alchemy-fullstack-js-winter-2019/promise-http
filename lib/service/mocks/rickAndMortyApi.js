module.exports = {
  getCharacter() {
    return Promise.resolve({
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human'
    });
  },

  getCharacters() {
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
      },
      {
        name: 'Rick Sanchez',
        species: 'Human',
        status: 'Alive'
      }
    ]);
  }
};

