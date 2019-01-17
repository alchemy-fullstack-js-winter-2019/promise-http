const { parse } = require('url');
const { getCharacters } = require('./services/rickAndMortyGetCharactersApi');
const bodyParser = require('./bodyParser');
const notes = { '1' : ['Go walk the dog'] };

module.exports = (req, res) => {
  const url = parse(req.url, true);
  if(url.pathname === '/characters' && req.method === 'GET') {
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

  
  else if(req.method === 'POST' && url.pathname === '/characters') {
    bodyParser(req)
      .then(body => {
        const id = body.characterId;
        const note = body.note;

        if(notes[id]) {
          notes[id].push(note);
        }
        else {
          notes[id] = [note];
        }
        res.statusCode = 200;
        res.end();
      });
  }
    
  else if(req.method === 'GET' && url.pathname.includes('/characters/')) {
    const id = url.pathname.slice(1).split('/')[1];

    const html = notes[id].map(note => {
      return `<li>
                ${note}
              </li>`;
    }).reduce((a, b) => {
      return a + b;
    });
    res.setHeader('Content-Type', 'text/html');
    res.end(`
        <html>
          <body>
            </ul>
              ${html}
            </ul>
          </body>
        </html>`);
  }

});
