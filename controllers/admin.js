const Product = require("../models/Product");

exports.postAddProduct = (req, res, next) => {
  const { title, imageUrl, description, price } = req.body;
  const product = new Product(title, price, description, imageUrl);
  product
    .save()
    .then((result) => {
      res
        .status(200)
        .json({ message: "Product added successfully", product: product });
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.getAdminProducts = (req, res, next) => {
  Product.fetchAll()
    .then((products) => {
      res.status(200).json(products);
    })
    .catch((err) => {
      console.log(err);
    });
};
exports.postEditProduct = (req, res, next) => {
  const prodId = req.body.productId;
  const updatedTitle = req.body.title;
  const updatedPrice = req.body.price;
  const updatedImageUrl = req.body.imageUrl;
  const updatedDescription = req.body.description;

  const product = new Product(
    updatedTitle,
    updatedPrice,
    updatedDescription,
    updatedImageUrl,
    prodId
  );

  product
    .save()
    .then((result) => {
      res.status(200).json("Product edited successfully");
    })
    .catch((err) => console.log(err));
};
exports.postDeleteProduct = (req, res, next) => {
  const prodId = req.body.productId;
  Product.deleteById(prodId)
    .then(() => {
      res.status(200).json("Product Deleted");
    })
    .catch((err) => console.log(err));
};
