const { parse } = require('url');

module.exports = (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  const url = parse(req.url);
  if(url.pathname === '/tester') {
    res.end(JSON.stringify({ testing: 123 }));
  }
};
