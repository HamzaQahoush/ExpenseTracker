"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importing modules
const express_1 = __importDefault(require("express"));
const userController = require("../Controllers/userController");
const { signup, login } = userController;
const userAuth = require("../Middleware/userAuth");
const router = express_1.default.Router();
//signup endpoint
//passing the middleware function to the signup
router.post("/signup", userAuth.saveUser, signup);
//login route
router.post("/login", login);
module.exports = router;
