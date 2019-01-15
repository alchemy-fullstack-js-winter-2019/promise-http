const { parse } = require('url');





// const app = (req, res) => {
//   const url = parse(req.url).pathname;
//   if(url === '/tester') 
//     res.end('testing123');
// };

// const app2 = (req, res) => {
//   const url = parse(req.url);
//   if(url.pathname === '/testing') 
//     res.setHeader('Content-Type', 'application/json');
//   res.end(JSON.stringify({ testing: 123 }));
// };

module.exports = {

  // app,
  // app2
};

