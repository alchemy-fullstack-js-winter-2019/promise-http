const { parse } = require('url');
const { getCharacter, getCharacters } = require('../lib/rickAndMortyApi');
const notes = ();

module.exports = (req, res) => {
  const url = parse(req.url, true);
  if(url.pathname.includes('/characters/')) {
    const id = url.pathname.slice(1).split('/')[1];
    console.log('id', id);
    getCharacter(id)
      .then(character => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(`<html><body>${character}</body></html>`);
      });
    // [character, id];
    
    getCharacters()
      .then(characters => {
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body></body></html>');
      })
  
      .catch(err => {
        res.statusCode = 500;
        res.end(`Error ${err}`);
      });
  }
  else if(req.method === 'POST' url.pathname('/characters/')) {
  }
  else if(url.pathname.includes('/character/')) {
    const id = pathname.
  }
  else if() {
  }
  else {
    
  }
};
