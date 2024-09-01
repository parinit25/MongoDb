const Product = require("../models/Product");

exports.postAddProduct = (req, res, next) => {
  const { title, imageUrl, description, price } = req.body;
  const product = new Product(title, price, description, imageUrl);
  product
    .save()
    .then((result) => {
      res.status(200).json("Product added successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};
