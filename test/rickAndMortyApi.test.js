const charById = require('../lib/services/rickAndMortyApi');

describe('test api', () => {
    it('can return stats based on ID given', () => {
        const rick = {
            name: 'Rick Sanchez', 
            status: 'Alive', 
            species: 'Human'
        };
        return charById(1)
            .then(ele => {
                expect(ele).toEqual(rick);

            });
    });
});
