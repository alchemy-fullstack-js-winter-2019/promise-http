const { parse } = require('url');
const bodyParser = require('./bodyParser');
const fs = require('fs');
// const request = require('superagent');
// const { 
//   // getCharacter, 
//   getCharacters
// } = require('./services/rickAndMortyApi');

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
//     console.log(req);
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
// module.exports = (req, res) => {
//   const url = parse(req.url, true);
//   // const id = url.pathname.slice(1).split('/')[1];
//   if(url.pathname.includes('/characters/')) {
//     getCharacters()
//       .then(characters => {
//         res.setHeader('Content-Type', 'text/html');
//         const html = characters.map(char => {
//           return `<li>Name: ${char.name},
//           Status: ${char.status},
//           Species: ${char.species}</li>`;
//         }).reduce((acc, curr) => acc + curr);
//         res.end(`<html><body>${html}</body></html>`);
//       })
//       .catch(err => {
//         res.statusCode = 500;
//         res.end(`${err}`);
//       });
//   }
// };

// POST to characters
const notes = {};
module.exports = (req, res) => {
  const url = parse(req.url, true);
  if(req.method === 'POST' && url.pathname === '/characters') {
    bodyParser(req)
      .then(body => {
        const id = body.characterId;
        const note = body.note;
        notes[id] ? notes[id].push(note) : notes[id] = [note];
        res.statusCode = 204;
        console.log('noteArray:', notes[id]); // eslint-disable-line no-console
        console.log('characterId:', id); // eslint-disable-line no-console
        fs.writeFile('./notes.txt', JSON.stringify(notes), { encoding: 'utf8' }, (err, data) => {
          if(err) return err;
          return data;
        });
        res.end();
        console.log('id: ' + id, '/ note: ' + notes[id]);
      });
  }

  if(url.pathname.includes('/characters/1234')) {
    fs.readFile('./notes.txt', { encoding: 'utf8' }, (err, data) => {
      if(data) {
        // console.log(data); // {"201":["hdasiasdfasdfasdfi","sdfasdfasdfi"]}
        // console.log(JSON.parse(data)); // { '201': [ 'hdasiasdfasdfasdfi', 'sdfasdfasdfi' ] }
        let test = JSON.parse(data);
        console.log(test);
        console.log(JSON.stringify(data)); // "{\"201\":[\"hdasiasdfasdfasdfi\",\"sdfasdfasdfi\"]}"
        res.end(`<html>${data}</html>`);
      }
    });
  }

};
