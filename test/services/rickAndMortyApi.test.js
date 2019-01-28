const { getCharacter, 
  getCharacters } = require('../../lib/services/rickAndMortyApi');

// jest.mock('../lib/services/rickAndMortyApi.js', () => ({
//   getCharacter() {
//     return Promise.resolve ({
//       name: 'Rick Sanchex', 
//       species: 'Alive',
//       status:'Human'
//     }); 
//   }
// }));

describe('rick & morty service', () => {
  it('gets a character by id', () => {
    return getCharacter(1)
      .then(character => {
        expect(character).toEqual({
          name: 'Rick Sanchez',
          status:'Alive',
          species: 'Human'
        });
      }); 
  });

  it('gets a list of entire catalogue of characters', () => {
    return getCharacters()
      .then(characters => {
        expect(characters).toHaveLength(20);
      });
  });
  it('has the correct properties', () => {
    return getCharacters()
      .then(characters => {
        expect(characters[11]).toHaveProperty('name');
        expect(characters[0]).toHaveProperty('status');
        expect(characters[7]).toHaveProperty('species');
        expect(characters[19]).not.toHaveProperty('type');
        expect(characters[2]).not.toHaveProperty('gender');
        expect(characters[10]).not.toHaveProperty('location');
        expect(Object.keys(characters[0])).toHaveLength(3);
        
      });
  });

  it('posts a note to the post object', () => {
    
  });

});
