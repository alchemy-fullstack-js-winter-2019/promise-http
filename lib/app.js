// server and app
// const { parse } = require('url');

// module.exports = ((req, res) => {
//   const url = parse(req.url);
//   res.setHeader('Content-Type', 'text/html');
//   if(url.pathname === '/tester')  {
//     res.end('testing 123');
//   }
// })

//   .listen(7890);

// json app

// const { parse } = require('url');

// module.exports = ((req, res) => {
//   const url = parse(req.url);
//   if(url.pathname === '/tester')  {
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify({ testing: 123 }));
//   }
// })


// Query String
// const { parse } = require('url');

// module.exports = ((req, res) => {
//   const url = parse(req.url, true);
//   if(url.pathname === '/you')  {
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify({ hi: `there ${url.query.name}` }));
//   }
// })
  
// POSTing data
const bodyParser = require('./bodyParser');
const { parse } = require('url');

let noteId = 0;
const notes = {};

module.exports = ((req, res) => {
  const url = parse(req.url, true);
  if(req.method === 'POST' && url.pathname === '/note') {
    bodyParser(req)
      .then(body => {
        notes[noteId++] = body;
        res.statusCode = 204;
        res.end();
      });
  }
});
