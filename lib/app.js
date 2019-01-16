const { parse } = require('url');
const bodyParser = require('../lib/bodyParser');


let noteId = 0;
const notes = {};


module.exports = (req, res) => {
    const url  = parse(req.url, true);

    if(url.pathname === '/tester') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ testing: 123 }));
    }
    else if(url.search === `?name=${url.query.name}`) {
        console.log('url', url);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({ hi: `there ${url.query.name}` }));
    }


    else if(req.method === 'POST' && url.pathname === '/notes') {
        bodyParser(req)
            .then(body => {
                notes[noteId++] = body;
                res.statusCode = 204;
                res.end();
            });
    }

}; 




