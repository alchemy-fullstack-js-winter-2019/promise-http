const { parse } = require('url');
const bodyParser = require('../lib/bodyParser');
const {
    charById, 
    charList
} = require('../lib/services/rickAndMortyApi');


module.exports = (req, res) => {
    const url  = parse(req.url, true);

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
        charById(charId)
            .then(character => {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(character));

            });
    }
    else if(url.pathname.includes('/characters')) {

        charList()
            .then(characters => {
                res.setHeader('Content-Type', 'text/html');
                res.write('<html><body>');

                characters.map(ele => {
                    res.write(`
                    <ul>
                        <li>
                            ${ele.name}
                        </li>
                        <li>
                            ${ele.status}
                        </li>
                        <li>
                            ${ele.species}
                        </li>
                    </ul>
                  `);
                });
                res.end('</body></html>');
            });
    }
    
    else if(req.method === 'POST' && url.pathname === '/characters') {
        const notes = {};        

        bodyParser(req)
            .then(body => {
                console.log(body);

                const id = body.characterId;
                const note = body.notes;
                if(notes[id]) {
                    notes[id].push(note);
                }
                else {
                    notes[id] = [];
                    notes[id].push(note);
                }
                res.statusCode = 204;
                res.end();
            });
    }
}; 




