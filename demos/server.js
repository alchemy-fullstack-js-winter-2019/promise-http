const http = require('http');
const { parse } = require('url');

// http.createServer((req, res) => {
//   console.log('request incoming!');
//   res.end('hi there!');
// })
//   .listen(7890);


// http.createServer((req, res) => {
//   console.log('request incoming!');
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<html><body>Thanks for visiting!</body></html>');
// })
//   .listen(7890);


http.createServer((req, res) => {
  const url = parse(req.url);
  res.setHeader('Content-Type', 'text/html');
  if(url.path === '/birthday') {
    res.end('<html>Happy Birthday<html>');
  }
  else if(url.path === '/tomorrow') {
    res.end('<html>Tomorrow, Tomorrow<html>');
  }
  else if(url.pathname === '/birthday/tomorrow') {
    res.end('<html>Tomorrow is your birthday<html>');
  }
  else {
    res.end('<html><body>Thanks for visiting!</body></html>');
  }
})
  .listen(7890);
