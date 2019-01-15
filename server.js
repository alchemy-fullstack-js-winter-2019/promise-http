const http = require('http');
const app = require('./lib/app');
const parse = require('./lib/app');

http.createServer(app, (req, res) => {
  const url = parse(req.url);
  if(url.pathname === '/tester') {
    res.end('testing123');
  }
})
  .listen(7890);