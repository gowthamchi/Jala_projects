const request = require('supertest');
const server = require('./index'); // path to your index.js file

describe('GET /', () => {
  it('should return expected text message', (done) => {
    request(server)
      .get('/')
      .expect(200)
      .expect('Hello from Node.js CI/CD via Jenkins! this is gowtham reddy', done);
  });
});
