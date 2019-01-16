const { parse } = require('url');


module.exports = (req, res) => {
  const url = parse(req.url, true);
  console.log(url.query.name);


  
  if(url.pathname === '/you') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ hi: `there ${url.query.name}` }));
  }
};

