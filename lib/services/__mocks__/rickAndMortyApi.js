const charById = () => {
    return Promise.resolve({
        name: 'Rick Sanchez', 
        status: 'Alive', 
        species: 'Human'
    });
};
const charList = () => {
    return Promise.resolve([
        {
            name: 'Rick Sanchez', 
            status: 'Alive', 
            species: 'Human' 
        },
        {
            name: 'Morty Smith', 
            status: 'Alive',
            species: 'Human'
        },
    ]);
};


module.exports = {
    charById, 
    charList
};

