const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer((req, res) => {
  const html = fs.readFileSync('index.html', 'utf-8');
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(html);
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});