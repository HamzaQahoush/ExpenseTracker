//importing modules
import express from "express";
const router = express.Router();

const userController = require("../Controllers/userController");
const { signup, login } = userController;

const userAuth = require("../Middleware/userAuth");

//signup endpoint
//passing the middleware function to the signup
router.post("/signup", userAuth.saveUser, signup);

//login route
router.post("/login", login);

module.exports = router;
