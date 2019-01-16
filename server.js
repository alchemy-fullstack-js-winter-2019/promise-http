const http = require('http');
const app = require('./lib/app.js');

http.createServer(app).listen(4000);


