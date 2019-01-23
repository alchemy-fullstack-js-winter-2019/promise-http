const { parse } = require('url');
const bodyParser = require('./bodyParser');
const { getCharacter, getCharacters } = require('./service/rickAndMortyApi');

const notes =  {};

module.exports = (req, res) => {

  const url = parse(req.url, true);
  if(req.method === 'POST' && url.pathname.includes('/characters')) {
    bodyParser(req)
      .then(({ characterId: id, note }) => {
        if(notes[id]) {
          notes[id].push(note);
        } else {
          notes[id] = [note];
        }
        res.statusCode = 204;
        res.end();
      });
  }
  
  else if(req.method === 'GET' && url.pathname.includes('/characters/')) {
    const id = url.pathname.slice(1).split('/')[1];
    const note = notes[id];
    getCharacter(id)
      .then(character => {

        res.setHeader('Content-Type', 'text/html');
        res.write('<html><body>');

        res.write(
          `<h1>${character.name}</h1>
        <p>${character.status}</p>
        <p>${character.species}</p>
        <ul>${note.reduce((acc, note) => acc += `<li>${note}</li>`)}</ul>`);

        res.end('</body></html>');
      });
  }

  else if(req.method === 'GET' && url.pathname.includes('/characters')) {
    getCharacters()
      .then(characters => {
        const character = setCharacters(characters).map(char => char);
        res.setHeader('Content-Type', 'text/html');
        res.end(`<html><body><ul>${character}</ul></body></html>`);
      });
  }

};

function setCharacters(arr) {
  return arr.map(char => {
    return `<li>Name: ${char.name}, Status: ${char.status}, Species: ${char.species}</li>`;
  });
}
