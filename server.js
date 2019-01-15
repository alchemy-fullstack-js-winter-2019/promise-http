/* eslint-disable no-console */
const http = require('http');
const { parse } = require('url');

http.createServer((req, res) => {
  const url = parse(req.url);
 
  if(url.pathname === '/birthday') {
    res.end('Happy birthday!');
  } else if(url.pathname === '/tomorrow') {
    res.end('Tomorrow, tomorrow');
  } else if(url.pathname === '/birthday/tomorrow') {
    res.end('Tomorrow is your birthday');
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
  

  res.setHeader({ 'Content-Type': 'text/html' });
  res.end(`
  <html>
    <body>
      <p>Thanks for visiting!</p>
    </body>
  </html>`);
})
  .listen(7890);



