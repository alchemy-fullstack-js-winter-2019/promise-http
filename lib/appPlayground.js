let noteId = 0;
const notes = {};

module.exports = (req, res) => {
  const url = parse(req.url, true);
  if(req.method === 'POST' && url.pathname === '/note') {
    bodyParser(req)
      .then(body => {
        notes[noteId++] = body;
      });
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ hi: `there ${url.query.name}` }));
  }
};
