const { 
  getCharacter, 
  // getCharacters 
} = require('../../lib/services/rickAndMortyApi');

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

  // Rick and Morty notes
  // it('can get all character names', () => {
  //   return getCharacters()
  //     .then(characters => {
  //       expect(characters).toEqual(['Rick Sanchez',
  //         'Morty Smith',
  //         'Summer Smith',
  //         'Beth Smith',
  //         'Jerry Smith',
  //         'Abadango Cluster Princess',
  //         'Abradolf Lincler',
  //         'Adjudicator Rick',
  //         'Agency Director',
  //         'Alan Rails',
  //         'Albert Einstein',
  //         'Alexander',
  //         'Alien Googah',
  //         'Alien Morty',
  //         'Alien Rick',
  //         'Amish Cyborg',
  //         'Annie',
  //         'Antenna Morty',
  //         'Antenna Rick',
  //         'Ants in my Eyes Johnson']);
  //       expect(characters).toHaveLength(20);
  //     });
  // });
});
