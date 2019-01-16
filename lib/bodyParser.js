const { parse } = require('url');

module.exports = req => {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });
    req.on('error', err => reject(err));
    req.on('end', () => resolve(JSON.parse(body)));
  });
};
