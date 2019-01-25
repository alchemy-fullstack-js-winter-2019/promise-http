const bodyParser = require('./bodyParser');
const { parse } = require('url');
const { getCharacter, getCharacters } = require('./services/rickAndMortyApi');

const notes = {};

const pushNote = (id, note) => {
  if(!notes[id]) {
    notes[id] = [];
  }
  notes[id].push(note);
};

module.exports = (req, res) => {
  const url = parse(req.url, true);

  if(req.method === 'GET' && url.pathname === '/characters') {
    getCharacters()
      .then(characters => {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html><body><ul>');
        characters.forEach(character => {
          res.write(`
            <li>
              <b>${character.name}</b>
              <br />
              Status: ${character.status}
              <br />
              Species: ${character.species}
            </li>
            <br />
          `);
        });
        res.end('</ul></body></html>');
      });
    // .catch(err => {
    //   res.statusCode = 500;
    //   res.end(`Error ${err}`);
    // });
  } else if(req.method === 'POST' && url.pathname === '/characters') {
    bodyParser(req)
      .then(({ characterId: id, note }) => {
        pushNote(id, note);
        res.statusCode = 204;
        res.end();
      });
  } else if(req.method === 'GET' && url.pathname.includes('/characters/')) {
    const id = url.pathname.slice(1).split('/')[1];
    const notesForCharacter = notes[id];
    getCharacter(id)
      .then(character => {
        const noteItems = notesForCharacter
          .reduce((acc, note) => {
            acc += `<li>${note}</li>`;
            return acc;
          }, '');

        res.setHeader('Content-Type', 'text/html');
        res.end(`<html><body>
          <h1>${character.name}</h1>
          <ul>
            ${noteItems}
          </ul>
        </body></html>`);
      });
  }
  
  // else if(url.pathname.includes('/character/')) {
  //   const id = url.pathname.slice(1).split('/')[1];
  //   getCharacter(id)
  //     .then(character => {
  //       res.setHeader('Content-Type', 'application/json');
  //       res.end(JSON.stringify(character));
  //     })
  //     .catch(err => {
  //       res.statusCode = 500;
  //       res.end(`Error ${err}`);
  //     });
  // }

  // else if(url.pathname.includes('/characters/') && req.method === 'POST') {
  //   bodyParser(req)
  //     .then(body => {
  //       const id = body.characterId;
  //       const note = body.note;
  //       if(notes[id]) {
  //         notes[id].push(note);
  //       } else {
  //         notes[id] = [];
  //         notes[id].push(note);
  //       }
  //       res.end();
  //     });
  // }

  // else if(url.pathname.includes('/characters/') && req.method === 'GET') {
  //   const id = url.pathname.slice(1).split('/')[1];
  //   const note = notes[id];
  //   getCharacter(id)
  //     .then(character => {
  //       res.write(`
  //         <html>
  //           <body>
  //             <h2>${character.name}</h2>
  //             <h3>${character.status}</h3>
  //             <h3>${character.species}</h3>
  //             <p>${note}</p>
  //           </body>
  //         </html>
  //       `);
  //       res.end();
  //     });
  // }

};