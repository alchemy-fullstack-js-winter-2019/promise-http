const http = require('http');
const { parse } = require('url');
const { getCharacters } = require('./services/rickAndMortyGetCharactersApi');

module.exports = http.createServer((req, res) => {
  const url = parse(req.url, true);
  if(url.pathname === '/characters') {
    getCharacters() 
      .then(characters => {
        const html = characters.map(character => {
          return `
            <li>${character.name}</li>
          `;
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
});
