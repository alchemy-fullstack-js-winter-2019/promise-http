module.exports = {

  getCharacter() {
    // Promise.resolve is a fake promise that creates a promise that immediately resolves to the value passed.
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
      }
    ]);
  }

};


