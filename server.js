const http = require('http');
const { parse } = require('url');

http.createServer((req, res)  => {
    const url  = parse(req.url);
    console.log(url);
    
    if(url.pathname === '/birthday') {
        var bday = '<html><body>Happy Birthday boiiii</body></html>';
        res.setHeader('Content-Type', 'text/html');
        res.end(bday);
    }
    else if(url.pathname === '/tomorrow') {
        var tomorrow = '<html><body> Tomorrow, Tomorrow </body></html>';
        res.setHeader('Content-Type', 'text/html');
        res.end(tomorrow);
    }
    
    else {
        console.log('request incoming');
        var body = '<html><body>Thanks for visiting!</body></html>';
        res.setHeader('Content-Type', 'text/html');
        res.end(body);
    }
    


}).listen(3000);


