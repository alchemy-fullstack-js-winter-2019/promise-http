const http = require('http');
const { parse } = require('url');
const getCharacter = require('./services/rickAndMortyApi');
const request = require('superagent');

http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const url = parse(req.url);
  if(url.pathname === '/character/:ID') {
    const idIndex = url.pathname.indexOf(':');
    const id = url.pathname.splice(idIndex);

    request.get(getCharacter(id));
    
  }
  
  else {
    res.statusCode = 400;
    res.end('Not found');
  }
});
