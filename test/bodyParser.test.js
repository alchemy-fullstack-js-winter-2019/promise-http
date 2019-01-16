const bodyParser = require('../lib/bodyParser');
const EventEmitter = require('events');

describe('bodyParser', () => {
  it('parses a requests body', () => {
    const req = new EventEmitter();
    const promise = bodyParser(req)
      .then(json => {
        expect(json).toEqual({ text: 'This is a note' });
      });
      
    req.emit('data', JSON.stringify({ text: 'This is a note' }));
    req.emit('end');

    return promise;
  });
  
});
