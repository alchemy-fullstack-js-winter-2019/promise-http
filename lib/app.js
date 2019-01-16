/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
const bodyParser = require('./bodyParser');
const { parse } = require('url');
const { 
  getCharacter,
  getCharacters
} = require('../service/RickAndMortyApi');

let noteId = 0;
const notes = {};


module.exports = (req, res) => {
  const url = parse(req.url, true);

  if(url.pathname.includes('/characters')) {
    getCharacter(id) 
      .then(character => {
        character.split('/');
      });

    const id = url.pathname.slice(1).split('/')[1];

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
};

