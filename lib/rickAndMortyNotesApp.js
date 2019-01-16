const http = require('http');
const { parse } = require('url');
const { getCharacters } = require('./services/rickAndMortyGetCharactersApi');
const bodyParser = require('./bodyParser');

module.exports = http.createServer((req, res) => {
  const url = parse(req.url, true);
  if(url.pathname === '/characters') {
    getCharacters() 
      .then(characters => {
        const html = characters.map(character => {
          return `
            <li>${character.name}, ${character.status}, ${character.species}</li>`;
        }).reduce((a, b) => {
          return a + b;
        });
        res.setHeader('Content-Type', 'text/html');
        res.end(`
          <html>
            <body>
              <ul>
                ${html}
              </ul>
            </body>
          </html>`);
      })
      .catch(err => {
        res.statusCode = 500;
        res.end(err);
      });
  }

  
  const notes = {};

  if(req.method === 'POST' && url.pathname === '/characters') {
    bodyParser(req)
      .then(body => {
        const id = body.characterId;
        const note = body.note;

        if(notes[id]) {
          notes[id].push(note);
        }
        else {
          notes[id] = [];
          notes[id].push(note);
        }
        res.statusCode = 200;
        res.end();
      });
  }
});

