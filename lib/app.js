const { parse } = require('url');
// const bodyParser = require('./bodyParser');
// const request = require('superagent');
const { 
  getCharacter, 
  getCharacters 
} = require('./services/rickAndMortyApi');

// server and app
// module.exports = (req, res) => {
//   const url = parse(req.url);
//   res.setHeader('Content-Type', 'text/html');
//   if(url.pathname === '/tester') {
//     res.end('testing123');
//   }
//   else {
//     res.statusCode = 404;
//     res.end('Not found');
//   }
// };

// json app
// module.exports = (req, res) => {
//   const url = parse(req.url);
//   res.setHeader('Content-Type', 'application/json');
//   if(url.pathname === '/tester') {
//     res.end(JSON.stringify({ testing: 123 }));
//   }
//   else {
//     res.statusCode = 404;
//     res.end('Not found');
//   }
// };

// Query Strings
// module.exports = (req, res) => {
//   const url = parse(req.url, true);
//   res.setHeader('Content-Type', 'application/json');
//   if(url.pathname === '/you') {
//     res.end(JSON.stringify({ hi: `there ${url.query.name}` }));
//   }
//   else {
//     res.statusCode = 404;
//     res.end('Not found');
//   }
// };

// POSTing data
// let noteId = 0;
// const notes = {};
// module.exports = (req, res) => {
//   const url = parse(req.url, true);
//   if(req.method === 'POST' && url.pathname === '/note') {
//     bodyParser(req)
//       .then(body => {
//         notes[noteId++] = body;
//         res.statusCode = 204;
//         console.log(notes);
//         res.end();
//       });
//   }
// };

// rick and morty character by ID
// module.exports = (req, res) => {
//   const url = parse(req.url, true);
//   if(url.pathname.includes('/character/')) {
//     const id = url.pathname.slice(1).split('/')[1];
//     getCharacter(id)
//       .then(character => {
//         res.setHeader('Content-Type', 'application/json');
//         res.end(JSON.stringify(character));
//       })
//       .catch(err => {
//         res.statusCode = 500;
//         res.end(`${err}`);
//       });
//   }
// };


// // Rick and Morty notes
module.exports = (req, res) => {
  const url = parse(req.url, true);
  // const id = url.pathname.slice(1).split('/')[1];
  if(url.pathname.includes('/characters/')) {
    getCharacters()
      .then(characters => {
        res.setHeader('Content-Type', 'text/html');
        const html = characters.map(char => {
          return `<li>${char}</li>`;
        });
        res.end(`<html><body>${html}</body></html>`);
      })
      .catch(err => {
        res.statusCode = 500;
        res.end(`${err}`);
      });
  }
};

