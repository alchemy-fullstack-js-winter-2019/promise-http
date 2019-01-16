/* eslint-disable no-console */
const bodyParser = require('./bodyParser');
const { parse } = require('url');
const { getCharacter } = require('../service/__mocks__/rickAndMortyApi');

let noteId = 0;
const notes = {};


module.exports = (req, res) => {
  const url = parse(req.url, true);

  if(url.pathname.includes('/characters')) {

    const id = url.pathname.slice(1).split('/')[1];
    getCharacter(id)
      .then(characters => {
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><body></body></html>');
      })
      .catch(err => {
        res.statusCode = 500;
        res.end(`Error ${err}`);
      });


  }

  if(req.method === 'POST' && url.pathname === '/characters') {
    bodyParser(req)
      .then(body => {
        notes[noteId++] = body;
        res.statusCode = 204;
        res.end();
      });
  }
  
  
};

