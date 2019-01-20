/* eslint-disable no-console */
const http = require('http');
// const { parse } = require('url');
const app = require('./lib/app');
const PORT = 7890;

// create server
// http.createServer((req, res) => {
//   console.log('request incoming!');
//   res.end('hi there!');
// })
//   .listen(7890);

// respond from server
// http.createServer((req, res) => {
//   console.log('request incoming!');
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<html><body>Thanks for visiting!</body></html>');
// })
//   .listen(7890);

// respond based on path
// http.createServer((req, res) => {
//   const url = parse(req.url);
//   res.setHeader('Content-Type', 'text/html');
//   if(url.pathname === '/birthday') {
//     res.end('<html>Happy Birthday<html>');
//   }
//   else if(url.pathname === '/tomorrow') {
//     res.end('<html>Tomorrow, Tomorrow<html>');
//   }
//   else if(url.pathname === '/birthday/tomorrow') {
//     res.end('<html>Tomorrow is your birthday<html>');
//   }
//   else {
//     res.statusCode = 404;
//     res.end('<html>Not found</html>');
//   }
// })
//   .listen(7890);

http
  .createServer(app)
  .listen(PORT, () => console.log('Server listening on port:', PORT));
