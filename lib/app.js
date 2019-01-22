/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const bodyParser = require('./bodyParser');
const { parse } = require('url');
const fs = require('fs');

// const { 
//   getCharacter,
//   getCharacters
// } = require('../service/RickAndMortyApi');

// const notes = {};


// module.exports = (req, res) => {
//   const url = parse(req.url, true);
//   const notes = {};

//   if(url.pathname.includes('/characters')) {
//     const id = url.pathname.slice(1).split('/')[1];
//     getCharacter(id) 
//       .then(character => {
//         res.setHeader('Content-Type', 'application/json');
//         res.end(JSON.stringify(character));
//       });
//   }

//   else if(url.pathname.includes('/characters') && req.method === 'POST') {
//     bodyParser(req)
//       .then(body => {
//         const id = body.characterId;
//         const note = body.note;
//         if(!notes[id]) {
//           notes[id] = [];
//           notes[id].push(note);
//           res.statusCode = 204;
//           res.end();
//         }

//       });
//   }

//   else if(url.pathname.includes('/characters/') && req.method === 'GET') {
//     const id = url.pathname.slice(1).split('/')[1];
//     const note = notes[id][0];
//     console.log(note);
      
//     getCharacter(id)
//       .then(character => {
//         res.setHeader('Content-Type', 'text/html');
//         res.end('<html><body>');
//         res.write(`
//             <h2>${character.name}</h2>
//             <h4>${character.status}</h4>
//             <h4>${character.species}</h4>
//             <p>${note}</p>
//           `);
//         res.end('</body></html>');
//       });
//   }

//   else if(url.pathname.includes('/characters') && req.method === 'GET'){
//     getCharacters()
//       .then(characters => {
//         res.setHeader('Content-Type', 'text/html');
//         res.write('<html><body><ul>');
//         characters.map(character => {
//           res.write(`
//               <li>
//                 <strong>${character.name}</strong>
//                 ${character.status}
//                 ${character.species}
//               </li>
//             `);
//         });
//         res.end('</ul></body></html>');
        
//       });
//   }
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
        fs.writeFile('./notes.txt', JSON.stringify(notes), { encoding: 'utf8' }, (err, data) => {
          if(err) return err;
          return data;
        });
        res.end();
      });
  }

  if(url.pathname.includes('/characters/1234')) {
    fs.readFile('./notes.txt', { encoding: 'utf8' }, (err, data) => {
      if(data) {
        let test = JSON.parse(data);
        console.log(test);

      }
    });
  }
};



