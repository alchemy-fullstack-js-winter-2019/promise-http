const { getCharacter, getCharacters } = require('../../lib/services/rickAndMortyApi');

describe('rick and morty service', () => {
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
  it('can get a list of characters', () => {
    return getCharacters()
      .then(characters => {
        expect(characters).toHaveLength(20);
        // expect(characters[0]).toEqual({
        //   name: 'Rick Sanchez',
        //   status: 'Alive',
        //   species: 'Human'
        // });
      });
  });
});
