const http = require('http');

http.createServer((req, res)  => {
    console.log('request incoming');
    var body = '<html><body>Thanks for visiting!</body></html>';

    res.setHeader('Content-Type', 'text/html');
    res.end(body);



}).listen(3000);


