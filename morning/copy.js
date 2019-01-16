const fsPromises = require('fs').promises;

const copy = function(src, dst) {
    return fsPromises.readFile(src, { encoding: 'utf8' })
        .then((data) => fsPromises.writeFile(dst, data));
};

module.exports = copy;

