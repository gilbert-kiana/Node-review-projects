const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") res.write("This is a response from https");
  res.end();
});

server.listen(5000);
