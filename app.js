const http = require("http");

const server = http.createServer((req, res) => {
  res.write("This is a response from https");
  res.end();
});

server.listen(5000);
