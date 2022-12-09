"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    const secretKey = process.env.secretKey;
    //check if token exist and is verifed 
    if (token) {
        jsonwebtoken_1.default.verify(token, secretKey, (err, decodedToken) => {
            if (err) {
                console.log(err.message);
                res.send('Validation Error , Please Login Again ');
            }
            else {
                console.log(decodedToken);
                next();
            }
        });
    }
    else {
        res.json({ 'msg': 'You Should be logged In first' });
    }
};
module.exports = { requireAuth };
