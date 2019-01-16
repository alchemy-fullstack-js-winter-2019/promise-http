const http = require('http');

const { parse } = require('url');

// respond from server
// http.createServer((req, res) => {
//   console.log('incoming msg');
//   res.setHeader('Content-Type', 'text/html');
//   res.end(`
//   <html>
//     <body>
//     <p>Thanks for visiting!</p>
//       </body>
//      </html>`);
// })
//   .listen(7890);

// respond based on path

// http.createServer((req, res) => {
//   const url = parse(req.url);
//   const pathname = url.pathname;
//   res.setHeader('Content-Type', 'text/html');
//   if(pathname === '/birthday' {
//     res.end(`Happy Birthday`);
//   }
//   else if(pathname === '/tomorrow' {
//     res.end('Tomorrow, Tomorrow');
//   }
//   else if(pathname === '/birthday/tomorrow') {
//     res.end('Tomorrow is your birthday');
//   }
//   else {
//     res.statusCode = 404;
//     res.end('Not Found')
//   } 
  
// })
//   .listen(7890);

// Server and App

// const http = require('http');
const app = require('./lib/app');

http.createServer(app)
  .listen(7890);




