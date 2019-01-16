module.exports = {

  getCharacter() {
    // Promise.resolve is a fake promise that creates a promise that immediately resolves to the value passed.
    return Promise.resolve({
      name: 'Rick Sanchez',
      status: 'Alive',
      species: 'Human'
    });
  }

  
};


