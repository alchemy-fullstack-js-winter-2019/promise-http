const { parse } = require('url');

module.exports = (req, res) => {
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
  else if(url.path === '/tester') {
    res.end('Testing 123');
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
  else {
    res.statusCode = 404;
    res.end(`<html>
      <body>
        <p>Not found!</p>
      </body>
    </html>`);
  }
};
