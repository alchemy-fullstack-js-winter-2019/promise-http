const bodyParser = require('./bodyParser');
const { parse } = require('url');
const { getCharacter, getCharacters } = require('./services/rickAndMortyApi');

const notes = {};

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
  } else if(url.pathname.includes('/characters') && req.method === 'POST') {
    bodyParser(req)
      .then(body => {
        const id = body.characterId;
        const note = body.note;
        if(notes[id]) {
          notes[id].push(note);
        } else {
          notes[id] = [];
          notes[id].push(note);
        }
        res.statusCode = 204;
        res.end();
      });
  } else if(url.pathname.includes('/characters/') && req.method === 'GET') {
    const id = url.pathname.slice(1).split('/')[1];
    
    getCharacter(id)
      .then(character => {
        if(!notes[id]) {
          notes[id] = [];
        }
        const note = notes[id];
        res.write(`
          <html>
            <body>
              <h2>${character.name}</h2>
              <h3>Status: ${character.status}</h3>
              <h3>Species: ${character.species}</h3>
              <p>Note: ${note}</p>
            </body>
          </html>
        `);
        res.end();
      });
  }

};