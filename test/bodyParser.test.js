const bodyParser = require('../lib/bodyParser');
const EventEmitter = require('events');

describe('bodyParser', () => {
  it('parses a requests body', () => {
    const req = new EventEmitter(); //make a fake request with event emitter
    req.headers = {
      'content-type': 'application/json'
    };
    req.method = 'POST';
    const promise = bodyParser(req)
      .then(json => {
        expect(json).toEqual({ testing: 1234 });
      });
    req.emit('data', JSON.stringify({ testing: 1234 }));
    req.emit('end');

    return promise;
  });
});
