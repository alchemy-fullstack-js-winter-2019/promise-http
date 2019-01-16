const { parse } = require('url');
const bodyParser 

module.exports = (req, res) => {
  const url = parse(req.url, true);
  if(req.method === 'POST' && url.pathname === '/note') {
    bodyParser(req)
      .then(body => {
      });
  }
    res.
  // if(url.pathname === '/you') {
  //   res.setHeader('Content-Type', 'application/json');
  //   res.end(JSON.stringify({ hi: `there ${url.query.name}` }));
  // }
};
