const { parse } = require('url');
const bodyParser = require('./bodyParser');
const { getCharacter, getCharacters } = require('./services/rickAndMortyApi');

module.exports = (req, res) => {
  const notes = { '1': ['My favorite character'] };
  console.log('request incoming');
  const url = parse(req.url, true);
  if(url.search === `?name=${url.query.name}`) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ text: `hi there ${url.query.name}` }));
  }
   
  else if(req.method === 'POST' && url.pathname === '/character') {
    bodyParser(req)
      .then(body => {
        console.log(body);
        const id = body.characterId;
        const note = body.note;
        if(notes[id]) {
          notes[id].push(note);
        } else {
          notes[id] = [note];
        }
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
        res.end(`</body>
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
