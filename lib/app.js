const { parse } = require('url');

// module.exports = (req, res) => {
//   const url = parse(req.url);
//   res.setHeader('Content-Type', 'text/html');
//   if(url.pathname === '/tester') {
//     res.end('testing123');
//   }
//   else {
//     res.statusCode = 404;
//     res.end('Not found');
//   }
// };

// module.exports = (req, res) => {
//   const url = parse(req.url);
//   res.setHeader('Content-Type', 'application/json');
//   if(url.pathname === '/tester') {
//     res.end(JSON.stringify({ testing: 123 }));
//   }
//   else {
//     res.statusCode = 404;
//     res.end('Not found');
//   }
// };

module.exports = (req, res) => {
  const url = parse(req.url, true);
  res.setHeader('Content-Type', 'application/json');
  if(url.pathname === '/you') {
    res.end(JSON.stringify({ hi: `there ${url.query.name}` }));
  }
  else {
    res.statusCode = 404;
    res.end('Not found');
  }
};
