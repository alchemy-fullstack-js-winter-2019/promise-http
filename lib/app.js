const { parse } = require('url');
const bodyParser = require('../lib/bodyParser');
const getRM = require('../lib/services/rickAndMortyApi');


module.exports = (req, res) => {
    const url  = parse(req.url, true);
    // const charId = url.pathname.splice(1).split('/')[1];


    if(url.pathname === '/tester') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ testing: 123 }));
    }
    else if(url.search === `?name=${url.query.name}`) {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ hi: `there ${url.query.name}` }));
    }

    else if(req.method === 'POST' && url.pathname === '/notes') {
        let noteId = 0;
        const notes = {};
        bodyParser(req)
            .then(body => {
                notes[noteId++] = body;
                res.statusCode = 204;
                res.end();
            });
    }
    else if(url.pathname.includes('/character/')) {
        const charId = url.pathname.slice(1).split('/')[1];
        getRM(charId)
            .then(character => {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(character));

            });
    }

}; 




