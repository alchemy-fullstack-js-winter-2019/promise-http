// server and app exercise
// const { parse } = require('url');

// module.exports = ((req, res) => {
//   const url = parse(req.url);
//   res.setHeader('Content-Type', 'text/html');
//   if(url.pathname === '/tester')  {
//     res.end('testing 123');
//   }
// })

//   .listen(7890);

// json app

// const { parse } = require('url');

// module.exports = ((req, res) => {
//   const url = parse(req.url);
//   if(url.pathname === '/tester')  {
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify({ testing: 123 }));
//   }
// })


// Query String
// const { parse } = require('url');

// module.exports = ((req, res) => {
//   const url = parse(req.url, true);
//   if(url.pathname === '/you')  {
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify({ hi: `there ${url.query.name}` }));
//   }
// })
  
// 

const { parse } = require('url');
const { getCharacter, getCharacters } = require('./services/rickAndMortyApi');
const bodyParser = require('./bodyParser');

const notes = {};


module.exports = (req, res) => {
  const url = parse(req.url, true);
  if(url.pathname.includes('/character/')) {
    const id = url.pathname.slice(1).split('/')[1];
    getCharacter(id)
      .then(character => {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(character));
      })
      .catch (err => {
        res.statusCode = 500;
        res.end(`Error ${err}`);
      });
  }
  else if(url.pathname.includes('/characters') && req.method === 'GET') {
    getCharacters()
      .then(characters => {
        let html = '';
        characters.map(char => {
          html += `<li> ${char.name} </li>`;
        });
        res.setHeader('Content-Type', 'text/html');
        res.end(`<html><body>${html}</body></html>`);
      
      })
      .catch (err => {
        res.statusCode = 500;
        res.end(`Error ${err}`);
      });
  }
  else if(req.method === 'POST' && req.url === '/characters') {
    bodyParser(req) 
      .then(body => {
        const id = body.characterId;
        const note = body.note;
        if(notes[id]) {
          notes[id].push(note);
        } else {
          notes[id] = [];
          notes[id].push(note);
        }
        res.statusCode = 204;
        res.end();

      });
  }
};

// getCharacter exercise
// module.exports = (req, res) => {
//   const url = parse(req.url, true);
//   if(url.pathname.includes('/character/')){
//     // get id of character
//     // split on /
//     // [character, :id]
//     const id = url.pathname.slice(1).split('/')[1];
//     getCharacter(id)
//       .then(character => {
//         res.setHeader('Content-Type', 'application/json');
//         res.end(JSON.stringify(character));
//       })
//       .catch(err => {
//         res.statusCode = 500;
//         res.end(`Error ${err}`);
//       });
//   }

// module.exports = (req, res) => {
//   const url = parse(req.url, true);
//   if(url.pathname.includes('/characters')){
//     // get id of character
//     // split on /
//     // [character, :id]
//     getCharacters()
//       .then(characters => {
//         const html = characters.map(char => {
//           console.log('html', html);
//           return `<li> ${char.name} </li>`;
//         });

//         res.setHeader('Content-Type', 'text/html');
//         res.end(`<html><body>${html.char.name}</body></html>`);
//       })
//       .catch(err => {
//         res.statusCode = 500;
//         res.end(`Error ${err}`);
//       });
//   }

// };

 
 


