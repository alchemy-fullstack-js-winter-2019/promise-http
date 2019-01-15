/*eslint-disable no-console*/
const http = require('http');
const app = require('./lib/app');

http.createServer(app)
  .listen(7890);
















// const { parse } = require('url');

// http.createServer((request, response) => {
//   const url = parse(request.url).pathname;
//   let msg = '';
//   if(url === '/birthday') {
//     msg = 'Happy Birthday!';
//   } else if(url === '/tomorrow') {
//     msg = 'tomorrow, tomorrow';
//   } else if(url == '/birthday/tomorrow') {
//     msg = 'Tomorrow is your birthday!';
//   } else {
//     msg = '404 page not found';
//   }
//   response.setHeader('Content-Type', 'text/html');
//   response.end(`<html>
//   <head>
//   <title>Up and running!</title>
//   </head>
//   <body>
//   <h1>${msg}</h1>
//   <h2>Weeeeeee</h2>
//   </body>
//   </html>`);
// })  
//   .listen(7890);
