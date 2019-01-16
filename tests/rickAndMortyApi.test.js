const { 
  getCharacter,
  getCharacters
} = require('../service/__mocks__/rickAndMortyApi');

describe('rick and morty service', () => {
  it('gets a character by id', () => {
    return getCharacter(1)
      .then(character => {
        expect(character).toEqual({
          name: 'Rick Sanchez',
          status: 'Alive',
          species: 'Human'
        });
      });
  });
});

describe('RickAndMortyApi', () => {
  it('gets a list of characters', () => {
    return getCharacters(1)
      .then(character => {
        console.log(character);
      });
    
  });
});
