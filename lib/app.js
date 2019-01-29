const bodyParser = require('./bodyParser');
const { parse } = require('url');
const { getCharacter, getCharacters } = require('./services/rickAndMortyApi');

const notes = {};

module.exports = (req, res) => {

  const url = parse(req.url, true);

  if(req.method === 'GET' && url.pathname === '/characters') {
    console.log('GET /');
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
    console.log('POST /');
    bodyParser(req)
      .then(body => {
        const id = body.characterId;
        console.log('id', id);
        const note = body.note;
        console.log('note', note);
        if(notes[id]) {
          console.log('TRUE NOTE', note);
          notes[id].push(note);
        } else {
          notes[id] = [];
          console.log('FALSE NOTE: ', note);
          notes[id].push(note);
          console.log('notes', notes);
        }
        res.statusCode = 204;
        res.end();
      });
  } else if(url.pathname.includes('/characters/') && req.method === 'GET') {
    const id = url.pathname.slice(1).split('/')[1];
    console.log('NOTES', notes);
    
    getCharacter(id)
      .then(character => {
        if(!notes[id]) {
          notes[id] = [];
        }
        const note = notes[id];
        console.log('GET /id note', note);
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
        console.log('final note', note);
        res.end();
      });
  }

};