module.exports = {
  getCharacters() {
    return Promise.resolve( 
      [
        { 
          name: 'Rick Sanchez',
          status: 'Alive', 
          species: 'Human'
        },
        {
          name: 'Morty Smith',
          status: 'Alive',
          species: 'Human'
        }
      ]
    );
  }
};
