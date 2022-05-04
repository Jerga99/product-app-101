

const http = require("http");

const server = http.createServer(function(req, res) {

  // connect to DB
  res.writeHead(200, {"Content-Type": "text/html"});
  res.write("<html><body><p>This is home page</p></body></html>");
  res.end();
});

server.listen(3000);
console.log("Server is running on port 3000");

