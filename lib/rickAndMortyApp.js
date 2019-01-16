

module.exports = (req, res) => {
  const url = parse(req.url, true);
  if(url.pathname === '/character/ID') {
    bodyParser(req)
      .then();
    res.end();
  } 
};
