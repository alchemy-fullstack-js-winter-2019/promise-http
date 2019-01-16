const {
    charById, 
    charList
} = require('../lib/services/rickAndMortyApi');

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

    it('can return a list of characters', () => {
        const rick = {
            name: 'Rick Sanchez', 
            status: 'Alive', 
            species: 'Human'
        };

        return charList()
            .then(ele => {

                expect(ele.length).toEqual(20);
                expect(ele[0].name).toEqual(rick.name);
            });
    });
});
