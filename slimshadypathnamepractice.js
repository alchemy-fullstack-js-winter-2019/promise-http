const http = require('http');
const { parse } = require('url');

http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  const url = parse(req.url);
  if(url.pathname === '/slimshady') {
    res.end(`
      <html>
        <body>
          <p>Will the real slim shady please stand up!<p>
          <img src='https://www.interviewmagazine.com/wp-content/uploads/2017/12/391x308-eminem-TN.jpg'>
        </body>
      </html>`);
  }
  else if(url.pathname === '/ripcity') {
    res.end(`
      <html>
        <body>
          <h1>Go Blazers!!!!!!<h1>
          <img src='https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Portland_Trail_Blazers_logo.svg/1200px-Portland_Trail_Blazers_logo.svg.png'>
        </body>
      </html>`);
  }
  else if(url.pathname === '/tomorrow') {
    res.end(`
      <html>
        <body>
          <p>Tomorrow tomorrow!<p>
        </body>
      </html>`);
  }
  else {
    res.statusCode = 400;
    res.end('Not found');
  }
}).listen(7890);
