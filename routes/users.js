const express = require("express");
const usersControllers = require("../controllers/user");

const router = express.Router();

router.post("/sign-up", usersControllers.createUser);
router.get("/get-info/:userId", usersControllers.findUserById);
module.exports = router;
