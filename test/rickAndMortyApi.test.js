/*eslint-disable no-console*/

const { 
  getCharacter,
  getCharacters
} = require('../lib/service/rickAndMortyApi');

jest.mock('../lib/service/rickAndMortyApi.js');

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

describe('rick and morty service 2', () => {
  it('returns a list of characters', () => {
    return getCharacters()
      .then(characters => {
        expect(characters).toBeDefined();
      });
  });
});
