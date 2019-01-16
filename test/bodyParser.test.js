const bodyParser = require('../lib/bodyPrser');
const EventEmitter = require('events');


describe('bodyParser', ()=> {
  it('parses a requests body', () => {
const req = new EventEmitter();

const promise = bodyParser(req)
.then(json => {
  expect(json).toEqual({ testing: 1234});

req.emit('data', JSON.stringify({ testing:1234 }));
req.emit('end');
});
});
