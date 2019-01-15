const http = require('http');
const { parse } = require('url');

http.createServer((req, res) => {
  console.log('request incoming');
  const url = parse(req.url);
  res.setHeader('Content-Type', 'text/html');
  if(url.path === '/birthday') {
    res.end(`<html>
      <body>
        <p>Happy Birthday!</p>
      </body>
    </html>`);
  }
  else if(url.path === '/tomorrow') {
    res.end(`<html>
      <body>
        <p>Tomorrow, tomorrow!</p>
      </body>
    </html>`);
  }
  else if(url.path === '/birthday/tomorrow') {
    res.end(`<html>
      <body>
        <p>Your birthday is tomorrow!</p>
      </body>
    </html>`);
  }
})
  .listen(7890);
