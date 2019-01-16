// const { parse } = require('url');
// const bodyParser = require('./bodyParser');
// const shortId = require('shortid');


// A note is any kind of input
// POST is what happens when the input is sent to the server
// module.exports = (req, res) => {
//   const url = parse(req.url, true);
//   if(url.pathname.includes('/characters')) {
//     // parse the request
//     bodyParser(req)
//       .then(body => {
//         // body.text = note
//         const id = shortId.generate();
//         // const id == shortId.generate();
//         // notes[id] == {...body, id} - set the id in notes object and then add the object with the same id in it
//         // // spread operator...
//         notes[id] = { ...body, id };
//         // respond with the note that was created - can only respond with strings
//         // res.end(JSON.stringify(notes[id]));
//         res.end(JSON.stringify(notes[id]));
//       });
//   }
// };

// Last 
// notes[id] = [];
// notes[id] = push[...]
