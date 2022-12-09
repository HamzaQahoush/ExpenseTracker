"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = require("../Models/User");
const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    const secretKey = process.env.secretKey;
    //check if token exist and is verifed
    if (token) {
        jsonwebtoken_1.default.verify(token, secretKey, (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.send("Validation Error , Please Login Again ");
            }
            else {
                console.log(decodedToken, "decodedToken");
                // token.userID= decodedToken.id
                req.query = { ...req.query, userId: decodedToken.id };
                next();
            }
        });
    }
    else {
        res.json({ msg: "You Should be logged In first" });
    }
};
const checkUser = (req, res, next) => {
    const token = req.cookies.jwt;
    const secretKey = process.env.secretKey;
    if (token) {
        jsonwebtoken_1.default.verify(token, secretKey, async (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.locals.user = null;
                next();
            }
            else {
                console.log(decodedToken.id, "user id >>>>>");
                let user = await User_1.User.findByPk(decodedToken.id);
                res.locals.user = user;
                next();
            }
        });
    }
    else {
        res.locals.user = null;
        next();
    }
};
module.exports = { requireAuth, checkUser };
