const { parse } = require('url'); // enable for top + bottom chunk
const bodyParser = require('./bodyParser'); // enable for top + bottom chunk
const fs = require('fs'); // enable for bottom chunk
const { 
  getCharacter, // enable for top chunk 
  getCharacters // enable for top chunk
} = require('./services/rickAndMortyApi');

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


// };


// BOTTOM CHUNK
// POST to characters
const notes = {};
const addNote = (id, note) => {
  !notes[id] ? notes[id] = [] : null;
  notes[id].push(note);
};

module.exports = (req, res) => {
  const url = parse(req.url, true);
  const id = url.pathname.slice(1).split('/')[1];

  // Rick and Morty notes
  // GET /characters return HTML that displays a list of characters
  if(req.method === 'GET' && url.pathname === '/characters' 
    || req.method === 'GET' && url.pathname === '/characters/') {
    getCharacters()
      .then(characters => {
        res.setHeader('Content-Type', 'text/html');
        const chars = characters.map(char => {
          return `<li><p>
            <strong>Name:</strong> ${char.name},<br>
            <strong>Status:</strong> ${char.status},<br>
            <strong>Species:</strong> ${char.species}<br>
          </p></li>`;
        }).reduce((acc, curr) => acc + curr);
        res.end(`
          <html><body>
            <ul style="list-style:none">${chars}<ul>
          </body></html>
        `);
      })
      .catch(err => {
        res.statusCode = 404;
        res.end(`${err} Page not found`);
      });
  } 
  // POST /characters saves a note to the notes object
  else if(req.method === 'POST' && url.pathname === '/characters') {
    bodyParser(req)
      .then(({ characterId: id, note }) => {
        if(id <= 493) {
          addNote(id, note);
          res.statusCode = 204;
          fs.writeFile(
            './notes.txt', JSON.stringify(notes), 
            { encoding: 'utf8' }, (err, data) => {
              err ? err : data;
            }
          );
          res.end();
        } else {
          res.end(
            'Sorry, no character exists for id ' + `'${id}'. ` 
            + 'Try an id between 1 - 493 instead.'
          );
        }
      });
  }
  // GET /characters/:id displays a character and all saved notes about them
  // * if none saved displays an error instead
  else if(req.method === 'GET' && url.pathname.includes(`/characters/${id}`)) {
    if(!notes[id] && id) {
      res.setHeader('Content-Type', 'text/html');
      res.end(
        'No notes saved for character ' + `${id}.`
        + '<br><a href="/characters">Back to list</a>'
      );
    } else {
      const savedCharNotes = notes[id];
      getCharacter(id)
        .then(character => {
          const listOfNotes = savedCharNotes.reduce((acc, note) => {
            return acc += `<li>${note}</li>`;
          }, '');
          res.setHeader('Content-Type', 'text/html');
          res.end(`
            <html><body>
              <h3>${character.name} (${character.species})</h3>
              <ul>${listOfNotes}<ul>
            </body></html>
          `);
        });
    }
  }

};
