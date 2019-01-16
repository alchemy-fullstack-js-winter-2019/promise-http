module.exports = req => {
  return new Promise((resolve, reject) => {
    req.on('data', chunk => {

    });
    req.on('end', () => {

    });
    req.on('error', err => reject(err));
  });
};
