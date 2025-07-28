const http = require("node:http");

const server = http.createServer((req, res) => {
  req.on("close", () => {
    console.log("closed!");
  });
});

server.listen(3000);
