const { getCharacters } = require('../lib/services/rickAndMortyGetCharactersApi');

describe('getCharactersApi', () => {
  it('can return a list of rick and morty characters', () => {
    return getCharacters()
      .then(characters => {
        expect(characters).toEqual([
          'Rick Sanchez',
          'Morty Smith',
          'Summer Smith',
          'Beth Smith',
          'Jerry Smith',
          'Abadango Cluster Princess',
          'Abradolf Lincler',
          'Adjudicator Rick',
          'Agency Director',
          'Alan Rails',
          'Albert Einstein',
          'Alexander',
          'Alien Googah',
          'Alien Morty',
          'Alien Rick',
          'Amish Cyborg',
          'Annie',
          'Antenna Morty',
          'Antenna Rick',
          'Ants in my Eyes Johnson'
        ]);
      });
  });
});

