const { parse } = require('url');
const bodyParser = require('./bodyParser');
const { getCharacters } = require('./service/rickAndMortyApi');
const shortId = require('shortId');

const notes = {};

module.exports = (req, res) => {
  const url = parse(req.url, true);
  if(url.pathname.includes('/characters')) {
    getCharacters()
      .then(characters => {
        const character = setCharacters(characters).map(char => char);
        console.log('string', character);
        res.setHeader('Content-Type', 'text/html');
        res.end(`<html><body><ul>${character}</ul></body></html>`);
        
        // // body.text = note
        // const id = shortId.generate();
        // // const id == shortId.generate();
        // // notes[id] == {...body, id} - set the id in notes object and then add the object with the same id in it
        // // // spread operator...
        // notes[id] = { ...body, id };
        // // respond with the note that was created - can only respond with strings
        // // res.end(JSON.stringify(notes[id]));
        // res.end(JSON.stringify(notes[id]));
      });
  }

  if(url.method === 'POST' && url.pathname.includes('/notes')) {
    bodyParser(req)
      .then(body => {
        const id = shortId.generate();
        notes[id] = { ...body, id };
        res.end(JSON.stringify(notes[id]));
      });
  }
};

function setCharacters(arr) {
  return arr.map(char => {
    return `<li>Name: ${char.name}, Status: ${char.status}, Species: ${char.species}</li>`;
  });
}

// Last 
// notes[id] = [];
// notes[id] = push[...]
