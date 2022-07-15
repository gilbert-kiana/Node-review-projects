const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home page");
  }
  if (req.url === "/about") {
    res.end("About Page");
  }
  res.end("ERrop page");
});

server.listen(5000, () => {
  console.log("server listening");
});
