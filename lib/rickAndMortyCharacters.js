const http = require('http');
const { parse } = require('url');
const { getCharacter } = require('./services/rickAndMortyApi');

module.exports = http.createServer((req, res) => {
  const url = parse(req.url, true);
  if(url.pathname.includes('/character/')) {
    const id = url.pathname.slice(1).split('/')[1];
    getCharacter(id) 
      .then(character => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(character));
      })
      .catch(err => {
        res.statusCode = 500;
        res.end(err);
      });
  }
});
