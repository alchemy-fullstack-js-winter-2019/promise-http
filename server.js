const http = require('http');

http.createServer((req, res) => {
  console.log('request incoming');
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><p>Thanks for visiting!</p></body></html>');
})
  .listen(7890);
