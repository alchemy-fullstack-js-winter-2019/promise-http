/* eslint-disable no-console */
const bodyParser = require('./bodyParser');
const { parse } = require('url');
const { getCharacter } = require('../service/RickAndMortyApi');

let noteId = 0;
const notes = {};

module.exports = (req, res) => {
  const url = parse(req.url, true);

  if(url.pathname.includes('/character/')) {


    const id = url.pathname.slice(1).split('/')[1];
    getCharacter(id)
      .then(character => {
        res.setHeader('Content-Type', '');
        res.end(JSON.stringify(character));
      })
      .catch(err => {
        res.statusCode = 500;
        res.end(err);
      });


  }

  if(req.method === 'POST' && url.pathname === '/note') {
    bodyParser(req)
      .then(body => {
        notes[noteId++] = body;
        res.statusCode = 204;
        res.end();
      });
  }
  
  
};

