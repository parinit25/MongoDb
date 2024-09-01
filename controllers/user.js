const User = require("../models/Users");

exports.createUser = (req, res, next) => {
  const { name, email, password } = req.body;

  // You should hash the password before saving (consider using bcrypt)
  const user = new User(name, email, password);

  user
    .save()
    .then((result) => {
      res.status(201).json({
        message: "User created successfully",
        userId: result.insertedId,
      });
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to create user" });
    });
};
exports.findUserById = (req, res, next) => {
  const userId = req.params.userId;

  User.findById(userId)
    .then((user) => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({ message: "User not found" });
      }
    })
    .catch((err) => {
      res.status(500).json({ message: "Failed to retrieve user" });
    });
};
