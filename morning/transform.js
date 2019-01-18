const fsPromises = require('fs').promises;



module.exports = (src) => {
    return fsPromises.readFile(src, { encoding: 'utf8' })
        .then(data => {
            return data.replace(/[A-Z]/g, '');
        })
        .then(data => data.toUpperCase())
        .then(data => data.split(''))
        .then(data => data.reverse())
        .then(data => data.join(''));
};

