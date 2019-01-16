module.exports = {
    getCharacter() {
        return Promise.resolve({
            name: 'Rick Sanchez', 
            status: 'Alive', 
            species: 'Human'
        });
    }
};

