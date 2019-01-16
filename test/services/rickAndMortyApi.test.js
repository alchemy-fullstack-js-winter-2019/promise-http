const { getCharacter } = require('../../lib/services/rickAndMortyApi');

// rick and morty characters
describe('rickAndMortyApi service', () => {
  it('gets character by id', () => {
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
