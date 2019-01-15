const http = require('http');
const app = require('./lib/app');

// const { parse } = require('url');

// http.createServer((req, res) => {
//   const url = parse(req.url);
//     if(url.pathname === '/birthday') {
//       res.end('Happy Birthday');
//     } else if(url.pathname ==="/tomorow") {
//       }
//       else if(url.pathname === '/birthday/tomorrow') {
//       res.end
//       }
//     }
//   res.end(

http.createServer(app)
 
})
  .listen(7890);
