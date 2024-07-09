const serverless = require("serverless-http");
const express = require("express");
const app = express();
app.use(express.json())
const products = [{
  id:1,
  name:'canapea',
  price:250,
  },
  {
    id:2,
    name:'birou',
    price:500
  },
  {
    id:3,
    name:'fotoliu',
    price:349
  }
];

app.get("/", (req, res, next) => {
  return res.status(200).send(products);
});

app.post("/", (req, res, next) => {
  const body = req.body;
  console.log(req.body.name);
  const product = {
    id:body.id,
    name:body.name,
    price:body.price
  }
  products.push(product);
  return res.status(200).send({message:'product added succesfully',products:products});
});

app.put((req, res, next) => {
  return res.status(200).send({message:'there is going to be a product updated'});
});

exports.handler = serverless(app);
