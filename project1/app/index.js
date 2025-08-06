const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.end('Hello from Node.js CI/CD via Jenkins! this is gowtham reddy');
});

if (require.main === module) {
  server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

module.exports = server; // <-- this is important for testing
