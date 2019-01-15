const { getCharacter } = require('../../lib/services/rickAndMortyApi');

describe('getCharacter', () => {
  it('can get a character based on id', () => {
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
