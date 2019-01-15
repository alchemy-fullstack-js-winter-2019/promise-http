const http = require('http');

// http.createServer((req, res) => {
//   console.log('request incoming!');
//   res.end('hi there!');
// })
//   .listen(7890);

http.createServer((req, res) => {
  console.log('request incoming!');
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body>Thanks for visiting!</body></html>');
})
  .listen(7890);
