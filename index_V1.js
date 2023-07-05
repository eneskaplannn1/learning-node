const fs = require("fs");
const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.json());

const products = [
  { name: "iphone 2", price: 10000 },
  { name: "iphone 3", price: 20000 },
  { name: "iphone 4", price: 30000 },
];

app.get("/products/:id", (req, res) => {
  console.log(req.headers);
  res.render(`product-detail`);
});
app.get("/products", (req, res) => {
  console.log(req.headers);
  res.render(`products`, { products });
});

app.get("/", (req, res) => {
  console.log(req.headers);
  res.render("main");
});

// app.get("/products/:id", (req, res) => {
//   res.send(`product = ${req.params.id}`);
// });
// app.get("/products", (req, res) => {
//   res.send(`product details`);
// });

// app.get("/", (req, res) => {
//   res.send("deneme");
// });

const port = 4000;
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
