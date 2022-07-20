const express = require("express");

const app = express();

const { products } = require("./data");

app.get("/", (req, res) => {
  res.send("<h1>Homepage</h1><a href ='/api/products'>products</a>");
});

app.get("/api/products", (req, res) => {
  console.log(req);
  const newProduct = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });
  res.json(newProduct);
});

app.listen(5000, () => {
  console.log("server is listening on port5000");
});
