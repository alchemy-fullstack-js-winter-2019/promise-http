const { parse } = require('url');
const querystring = require('querystring');

module.exports = (req, res) => {
  console.log('request incoming');
  const url = parse(req.url);
  const query = querystring.parse(url.query);
  console.log(query);
  if(url.pathname === '/tester') {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ testing: 123 }));
  }
  if(url.search === `?name=${query.name}`) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ text: `hi there ${query.name}` }));
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
