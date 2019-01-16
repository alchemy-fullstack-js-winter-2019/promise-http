const { parse } = require('url');
const bodyParser = require('./bodyParser');

let noteId = 0;
const notes = {};

module.exports = (req, res) => {
  const url = parse(req.url, true);
  if(req.method === 'POST' && url.pathname === '/note') {
    bodyParser(req)
      .then(body => {
        notes[noteId++] = body;
        res.statusCode = 204;
        res.end();
      });
  }
};

// if(url.pathname === '/you') {
//   res.setHeader('Content-Type', 'application/json');
//   res.end(JSON.stringify({ hi: `there ${url.query.name}` }));
// }

