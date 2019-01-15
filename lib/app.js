const { parse } = require('url');

const app = (req, res) => {
  const url = parse(req.url).pathname;
  if(url === './tester') 
    res.end('testing123');
};

const app2 = (req, res) => {

};

module.exports = {
  app,
  app2
};

