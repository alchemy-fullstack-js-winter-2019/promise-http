const { parse } = require('url');

module.exports = (req, res) => {
  const url = parse(req.url);
  res.setHeader('Content-Type', 'text/html');
  if(url.pathname === '/tester') {
    res.end('<html>testing123<html>');
  }
  else {
    res.statusCode = 404;
    res.end('<html>Not found</html>');
  }
};
