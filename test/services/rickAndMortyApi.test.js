const { getCharacter, getCharacters } = require('../../lib/services/rickAndMortyApi');

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

  it('gets a list of characters', () => {
    return getCharacters()
      .then(character => {
        expect(character).toHaveLength(20);
      });
  });
});
