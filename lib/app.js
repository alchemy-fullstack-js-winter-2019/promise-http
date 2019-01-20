const { parse } = require('url'); // enable for top + bottom chunk
const bodyParser = require('./bodyParser'); // enable for top + bottom chunk
const fs = require('fs'); // enable for bottom chunk
// const { 
//   getCharacter, // enable for top chunk 
//   getCharacters // enable for top chunk
// } = require('./services/rickAndMortyApi');

// TOP CHUNK
// module.exports = (req, res) => {
//   // server and app
//   const url = parse(req.url);
//   if(url.pathname === '/tester123') {
//     res.setHeader('Content-Type', 'text/html');
//     res.end('testing123');
//   }

//   // json app
//   if(url.pathname === '/tester') {
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify({ testing: 123 }));
//   }

//   // Query Strings
//   const urlTrue = parse(req.url, true);
//   if(urlTrue.pathname === '/you') {
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify({ hi: `there ${urlTrue.query.name}` }));
//   }

//   // POSTing data
//   if(req.method === 'POST' && urlTrue.pathname === '/note') {
//     let noteId = 0;
//     let notes = {};
//     bodyParser(req)
//       .then(body => {
//         notes[noteId++] = body;
//         res.statusCode = 204;
//         res.end();
//       });
//   }

//   // rick and morty character by ID
//   if(urlTrue.pathname.includes('/character/')) {
//     const id = urlTrue.pathname.slice(1).split('/')[1];
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

//   // Rick and Morty notes
//   if(urlTrue.pathname.includes('/characters/')) {
//     getCharacters()
//       .then(characters => {
//         res.setHeader('Content-Type', 'text/html');
//         const html = characters.map(char => {
//           return `<li>Name: ${char.name},
//             Status: ${char.status},
//             Species: ${char.species}</li>`;
//         }).reduce((acc, curr) => acc + curr);
//         res.end(`<html><body>${html}</body></html>`);
//       })
//       .catch(err => {
//         res.statusCode = 500;
//         res.end(`${err}`);
//       });
//   }
// };


// BOTTOM CHUNK
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
        // console.log('noteArray:', notes[id]); // eslint-disable-line no-console
        // console.log('characterId:', id); // eslint-disable-line no-console
        fs.writeFile('./notes.txt', JSON.stringify(notes), { encoding: 'utf8' }, (err, data) => {
          if(err) return err;
          return data;
        });
        res.end();
        // console.log('id: ' + id, '/ note: ' + notes[id]);
      });
  }

  // display notes in browser by character ID
  if(url.pathname.includes('/characters/1234')) {
    fs.readFile('./notes.txt', { encoding: 'utf8' }, (err, data) => {
      if(data) {
        // console.log(data); // {"201":["hdasiasdfasdfasdfi","sdfasdfasdfi"]}
        // console.log(JSON.parse(data)); // { '201': [ 'hdasiasdfasdfasdfi', 'sdfasdfasdfi' ] }
        let test = JSON.parse(data);
        console.log(test);  // eslint-disable-line no-console
        // eslint-disable-next-line no-console
        console.log(JSON.stringify(data)); // "{\"201\":[\"hdasiasdfasdfasdfi\",\"sdfasdfasdfi\"]}"
        res.end(`<html>${data}</html>`);
      }
    });
  }

  // Ryan's ex...
  // if(req.method === 'GET' && url.pathname.includes('/characters')) {
  //   const id = urlTrue.pathname.slice(1).split('/')[1];
  //   const notesForCharacter = notes[id];
  //   getCharacter(id)
  //     .then(character => {
  //       notesForCharacter
  //         .reduce()
  //       res.setHeader('Content-Type', 'text/html');

  //     });
  // }

};
