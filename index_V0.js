const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("main.html", (err, html) => {
      if (err) console.log(err);
      res.write(html);
      res.end();
    });
  } else if (req.url === "/products") {
    fs.readFile("products.html", (err, html) => {
      if (err) console.log(err);
      res.write(html);
      res.end();
    });
  } else {
    fs.readFile("404.html", (err, html) => {
      if (err) console.log(err);
      res.write(html);
      res.end();
    });
  }
});
server.listen(4000, () => {
  console.log("server listening on port 4000");
});
