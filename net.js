const net = require('net');

var server = net.createServer((socket) => {
  socket.write('goodbye');
}).on('error',(err) => {
  throw err;
})

server.listen({
  host: 'localhost',
  port: 5000,
  exclusive: true
},() => {
  console.log('server listenining on',server.address());
})


//ref: https://www.sitepoint.com/basics-node-js-streams/
