const http = require('http');
const app = require('./lib/rickAndMortyCharacters');

http.createServer(app).listen(7890);
