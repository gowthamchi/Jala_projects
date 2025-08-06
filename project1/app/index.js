const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
  res.end('Hello from Node.js CI/CD via Jenkins! this is gowtham reddy');
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
if (require.main === module) {
  app.listen(3000, () => {
    console.log('Server running on port 3000');
  });
}
