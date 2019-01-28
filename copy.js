const fs = require('fs').promises;

module.exports = (src, dst) => {
  
  return fs.readFile(src, { encoding: 'utf-8' })
    .then(data => fs.writeFile(dst, data, { encoding: 'utf-8' }))
    .then(()=> console.log('COPY FILE DONE!'))
    .catch(err => console.error(err));
};
