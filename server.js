const app = require('./lib/rickAndMortyNotesApp');
const http = require('http');

http.createServer(app).listen(7890);
