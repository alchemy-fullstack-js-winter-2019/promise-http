const request = require('superagent');


const charById = id => {
    return request
        .get(`https://rickandmortyapi.com/api/character/${id}`)
        .then(res => {
            return {
                name: res.body.name, 
                status: res.body.status, 
                species: res.body.species
            };
        });
};

const charList = () => {
    return request
        .get('https://rickandmortyapi.com/api/character')
        .then(res => {
            return res.body.results;
        });
};

module.exports = {
    charById,
    charList
};
