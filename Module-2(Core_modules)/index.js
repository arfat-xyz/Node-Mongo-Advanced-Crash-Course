const http = require("http");

//Local module
const { name } = require("./other");
console.log(name());

// core module
const server = http.createServer(function (req, res) {
  console.log(`this server is running`);
});

server.listen(5000, () => {
  console.log("running");
});

// third party module -> underscore
const _ = require("underscore");
var stooges = [
  { name: "moe", age: 40 },
  { name: "larry", age: 50 },
  { name: "curly", age: 60 },
];
const name2 = _.pluck(stooges, "name");
console.log(`output from third party name : ${name2}`);
