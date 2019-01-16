const bodyParser = require('./bodyParser');
const { parse } = require('url');

let noteId = 0;
const notes = {};

module.exports = (req, res) => {
  const url = parse(req.url, true);
  console.log(url.query.name);

  if(req.method === 'POST' && url.pathname === '/note') {
    bodyParser(req)
      .then(body => {
        notes[noteId++] = body;
        res.statusCode = 204;
        res.end();
      });
  }
  
  
};

