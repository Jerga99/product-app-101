

const http = require("http");

const server = http.createServer(function(req, res) {
  console.log("Wooohoooo!!!");
});

server.listen(8080);
console.log("Server is running on port 8080");

