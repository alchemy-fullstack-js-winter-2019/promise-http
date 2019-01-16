const { getCharacter } = require('../service/RickAndMortyApi');

describe('RickAndMortyApi', () => {
  it('exports a function that takes an id and returns a promise that resolves to a character', () => {
    return getCharacter(1)
      .then(character => {
        console.log(character);
      });
    // .then(character => {
    //   expect(character).toEqual({
    //     name: 'Rick Sanchez',
    //     status: 'Alive',
    //     species: 'Human'
    //   });
    // });
  });
});
