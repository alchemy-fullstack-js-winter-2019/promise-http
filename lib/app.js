const { parse } = require('url');
// const bodyParser = require('./bodyParser');
const { getCharacter,
  getCharacters } = require('./services/rickAndMortyApi.js');

// const notes = {};
// let noteId = 0;

module.exports = (req, res) => {
  const url = parse(req.url, true);
  
  if(url.pathname.includes('/character/')) {
    //[1] because [0] in the array is associated with character 
    const id = url.pathname.slice(1).split('/')[1];
    getCharacter(id)

      .then(character => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(character));
      })
      .catch(err => {
        res.statusCode = 500;
        res.end(`Error ${err}`);
      }); 
  }
  else if(url.pathname.includes('/character')) {
    const id = url.pathname.
      getCharacters()

      .then(characters => {
        let html = '';
        characters.map(character => 
          html += `<li>${character.name}</li>`
        );
        res.setHeader('Content-Type', 'text/html');
        res.end(`<html>
                <body>
                  <ul>
                    ${html}
                  </ul>
                </body>
              </html>`);
      })
      .catch(err => {
        res.statusCode = 500;
        res.end(`Error ${err}`);
      }); 
  }
  // else if(req.method === 'POST' && url.pathname === '/notes') 

  // //else('Run a 404 error ')
};






