// server and app
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
const { getCharacter } = require('./services/rickAndMortyApi');

module.exports = (req, res) => {
  const url = parse(req.url, true);
  if(url.pathname.includes('/character/')){
    // get id of character
    // split on /
    // [character, :id]
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

};


