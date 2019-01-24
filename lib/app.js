const { parse } = require('url');
const bodyParser = require('./bodyParser');
const { getCharacter, getCharacters } = require('./service/rickAndMortyApi');
let noteId = 0;
const notes = {};

module.exports = (req, res) => {

  const url = parse(req.url, true);
  if(url.search === `?name=${url.query.name}`) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ text: `hi there ${url.query.name}` }));
  }
   
  else if(req.method === 'POST' && url.pathname === '/note') {
    bodyParser(req)
      .then(body => {
        notes[noteId++] = body;
        res.statusCode = 204;
        res.end();
      });
  }

  else if(url.pathname.includes('/character/')) {
    const id = url.pathname.slice(1).split('/')[1];
    getCharacter(id)
      .then(character => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(character));
      });
  }

  else if(url.pathname === '/character/') {   
    getCharacters()
      .then(characters => {
        res.setHeader('Content-Type', 'text/html');
        res.write(`<html>
        <body>`);
        characters.map(character => {
          res.write(`<div>
          <p>Name: ${character.name}</p>
          <ul>
            <li>Status: ${character.status}</li>
            <li>Species: ${character.species}</li>
          </ul>
          </div>`);
        });
        res.end(`<body/>
      </html>`);
      });
  }

  else {
    res.statusCode = 404;
    res.end(`<html>
      <body>
        <p>Not found!</p>
      </body>
    </html>`);
  }
};
