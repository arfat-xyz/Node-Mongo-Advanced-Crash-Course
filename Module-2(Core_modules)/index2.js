// const other = require("./other");
// console.log(other.substract(50, 100));

const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Server is running on server");
});
const port = 50;
server.listen(port);
console.log(`server is on ${port}`);
