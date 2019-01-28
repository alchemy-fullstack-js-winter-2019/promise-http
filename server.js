const http = require('http');
// const { parse } = require('url'); 
const app = require('./lib/app');

http.createServer(app)
  .listen(7890);


// http.createServer((req, res) => {
//   const url = parse(req.url);
// if(url.pathname === '/birthday') {
//   res.end('Happy Birthday');
// }else if(url.pathname === '/tomorrow'){
//   res.end('Tomorrow, tomorrow');
// }else if(url.pathname ==='birthday/tomorrow')
// res.end('Tomorrow is your birthday');
// }else{res status
//   // console.log('request incoming');
//   res.setHeader('Content-Type', 'text/html');
//   res.end(`
//   <html>
//     <body>
//       <p>Thanks for visiting!</p>
//     </body>
//   </html>`);
// })
//   .listen(7890);

