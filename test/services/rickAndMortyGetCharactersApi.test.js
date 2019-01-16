const { getCharacters } = require('../../lib/services/rickAndMortyGetCharactersApi');

describe('getCharactersApi', () => {
  it('can return a list of rick and morty characters', () => {
    return getCharacters()
      .then(characters => {
        expect(characters).toEqual([
          {"name": "Rick Sanchez", "species": "Human", "status": "Alive"}, 
          {"name": "Morty Smith", "species": "Human", "status": "Alive"}, 
          {"name": "Summer Smith", "species": "Human", "status": "Alive"}, 
          {"name": "Beth Smith", "species": "Human", "status": "Alive"}, 
          {"name": "Jerry Smith", "species": "Human", "status": "Alive"}, 
          {"name": "Abadango Cluster Princess", "species": "Alien", "status": "Alive"}, 
          {"name": "Abradolf Lincler", "species": "Human", "status": "unknown"}, 
          {"name": "Adjudicator Rick", "species": "Human", "status": "Dead"}, 
          {"name": "Agency Director", "species": "Human", "status": "Dead"}, 
          {"name": "Alan Rails", "species": "Human", "status": "Dead"}, 
          {"name": "Albert Einstein", "species": "Human", "status": "Dead"}, 
          {"name": "Alexander", "species": "Human", "status": "Dead"}, 
          {"name": "Alien Googah", "species": "Alien", "status": "unknown"}, 
          {"name": "Alien Morty", "species": "Alien", "status": "unknown"}, 
          {"name": "Alien Rick", "species": "Alien", "status": "unknown"}, 
          {"name": "Amish Cyborg", "species": "Alien", "status": "Dead"}, 
          {"name": "Annie", "species": "Human", "status": "Alive"}, 
          {"name": "Antenna Morty", "species": "Human", "status": "Alive"}, 
          {"name": "Antenna Rick", "species": "Human", "status": "unknown"}, 
          {"name": "Ants in my Eyes Johnson", "species": "Human", "status": "unknown"}
        ]);
      });
  });
});

