const getDb = require("../utils/database").getDb;
const mongodb = require("mongodb");

class User {
  constructor(name, email, password, cart, id) {
    this.name = name;
    this.email = email;
    this.password = password; // You should hash the password before storing
    this.cart = cart ? cart : { items: [] };
    this._id = id ? new mongodb.ObjectId(id) : null;
  }

  save() {
    const db = getDb();
    return db
      .collection("users")
      .insertOne(this)
      .then((result) => {
        console.log("User created!");
        return result;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  static findById(userId) {
    const db = getDb();
    return db
      .collection("users")
      .findOne({ _id: new mongodb.ObjectId(userId) })
      .then((user) => {
        return user;
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

module.exports = User;
