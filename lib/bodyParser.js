module.exports = req => {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      resolve(JSON.parse(body));
    });

    req.on('error', () => {
      let json = null;
      try {
        json = JSON.parse(body);
      } catch(e) {
        return reject(e);
      }

      resolve(json);
    });
  });
};
