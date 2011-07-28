var http = require('http');

function start() {
  http.createServer(function (request, response) {
    console.log("Request received");
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("Hello World");
    response.end();
  }).listen(8124, "127.0.0.1");
  console.log('Server running at http://127.0.0.1:8124/');
}

exports.start = start;  
