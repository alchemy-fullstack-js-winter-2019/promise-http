/* eslint-disable no-console */
const http = require('http');

http.createServer((req, res) => {
  console.log('request incoming');
  res.end('hi there');
})
  .listen(7890);



