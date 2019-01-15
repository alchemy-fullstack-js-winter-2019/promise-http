// const http = require('http');
// const { parse } = require('url');

// const server = http.createServer((req, res)  => {
//     const url  = parse(req.url);
//     console.log(url);
    
//     if(url.pathname === '/birthday') {
//         var bday = '<html><body>Happy Birthday boiiii</body></html>';
//         res.setHeader('Content-Type', 'text/html');
//         res.end(bday);
//     }
//     else if(url.pathname === '/tomorrow') {
//         var tomorrow = '<html><body> Tomorrow, Tomorrow </body></html>';
//         res.setHeader('Content-Type', 'text/html');
//         res.end(tomorrow);
//     }
//     else if(url.pathname === '/testing') {
//         var content = '{ testing: "testing123" }';
//         var body = `${content}`;
//         res.setHeader('Content-Type', 'text/html');
//         res.end(body);
//     }
    
//     else {
//         console.log('request incoming');
//         var body1 = '<html><body>Thanks for visiting!</body></html>';
//         res.setHeader('Content-Type', 'text/html');
//         res.end(body1);
//     }
// });



// module.exports = server;
