const net = require('net');

var server = net.createServer();


  server.on('connection', (socket) => {
    var remoteAddress = socket.remoteAddress + ':' + socket.remotePort ;
    console.log('new connection made%s',remoteAddress);

    socket.write('Hello mithilesh');

    socket.on('data',(info) => {
      console.log('%s',info);
  })




  })
  server.listen(8888,() => {
    console.log('server listening on port 8888 to %j',server.address());
  })
