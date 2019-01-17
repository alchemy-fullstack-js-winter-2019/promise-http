const { parse } = require('url');
const { getCharacter, getCharacters } = require('../lib/rickAndMortyApi');

module.exports = (req, res) => {
  const notes = { '1': ['Johnny Danger'] };
  const url = parse(req.url, true);
  if(url.pathname.includes('/characters/')) {
    const id = url.pathname.slice(1).split('/')[1];

    getCharacter(id)
      .then(character => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(`<html><body>${character}</body></html>`);
      });
    // [character, id];
  }
  else if(url.pathname === '/character' && req.method === 'GET') {
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
        res.end('<html><body></body></html>');
      })
  
      .catch(err => {
        res.statusCode = 500;
        res.end(`Error ${err}`);
      });
  }
  // else if(req.method === 'POST' && url.pathname === '/characters/') {

  else if(url.pathname.includes('/character/' && req.method === 'GET')) {
    const id = url.pathname.slice(1).split('/')[1];
    const note = notes[id][0];    
    getCharacter(id)
      .then(character => {
        res.setHeader('Content-Type', 'text/html');
        res.end(`<html>
      <body>
        <div>
          <p>Name: ${character.name}</p>
          <ul>
            <li>Status: ${character.status}</li>
            <li>Species: ${character.species}</li>
            <li>Note: ${note}</li>
          </ul>
          </div></body>
      </html>`);
      });
    //   }
    //   else {
    //     res.statusCode = 404;
    //     res.end(`Error ${notfound}`);
    //   }
    // };
  }
};
