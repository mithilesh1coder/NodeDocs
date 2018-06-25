const http = require('http');

const hostname = 'localhost';
const port = 4000;

const server = http.createServer((req,res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type','text/plain');
  res.end('Developer')
});

server.listen(port,hostname, () => {
  console.log('Server listening on port 4000');
})
