const request = require('superagent');

const getNotes = id => {
  return request
    .get(`characters/${id}`)
    .then(res => {
      return res.body;
    });
};

module.exports = { getNotes };
