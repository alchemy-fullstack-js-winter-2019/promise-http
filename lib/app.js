const { parse } = require('url');
const bodyParser = require('./bodyParser');
let noteId = 0;
const notes = {};

module.exports = (req, res) => {
  console.log('request incoming');
  const url = parse(req.url, true);
  if(url.search === `?name=${url.query.name}`) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ text: `hi there ${url.query.name}` }));
  }

  if(req.method === 'POST' && url.pathname === '/note'){
    bodyParser(req)
      .then(body => {
        notes[noteId++] = body;
        res.statusCode = 204;
        res.end();
      });
  }

  // if(url.pathname === '/characters') {

  // }
  
  else {
    res.statusCode = 404;
    res.end(`<html>
      <body>
        <p>Not found!</p>
      </body>
    </html>`);
  }
};
