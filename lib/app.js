const { parse } = require('url');

module.exports = (req, res) => {
  console.log('request incoming');
  const url = parse(req.url, true);
  if(url.pathname === '/tester') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ testing: 123 }));
  }
  if(url.search === `?name=${url.query.name}`) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ text: `hi there ${url.query.name}` }));
  }
  else {
    res.statusCode = 404;
    res.end(`<html>
      <body>
        <p>Not found!</p>
      </body>
    </html>`);
  }
};
