"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = require("../Models/User");
//signing a user up
//hashing users password before its saved to the database with bcrypt
const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const data = {
            name,
            email,
            password: await bcrypt_1.default.hash(password, 10),
        };
        //saving the user
        const user = await User_1.User.create(data);
        //if user details is captured
        //generate token with the user's id and the secretKey in the env file
        // set cookie with the token generated
        if (user) {
            let token = jsonwebtoken_1.default.sign({ id: user.id }, process.env.secretKey, {
                expiresIn: 1 * 24 * 60 * 60 * 1000,
            });
            res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
            const { id, name, email, lastLogin, createdAt } = user;
            return res.status(201).send({ user: { id, name, email, createdAt } });
        }
        else {
            return res.status(409).send("Details are not correct");
        }
    }
    catch (error) {
        console.log(error);
    }
};
//login authentication
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        //find a user by their email
        const user = await User_1.User.findOne({ where: { email: email } });
        //if user email is found, compare password with bcrypt
        if (user) {
            const isSame = await bcrypt_1.default.compare(password, user.password);
            //if password is the same
            //generate token with the user's id and the secretKey in the env file
            if (isSame) {
                let token = jsonwebtoken_1.default.sign({ id: user.id }, process.env.secretKey, {
                    expiresIn: 1 * 24 * 60 * 60 * 1000,
                });
                //if password matches wit the one in the database
                //go ahead and generate a cookie for the user
                res.cookie("jwt", token, { maxAge: 1 * 24 * 60 * 60, httpOnly: true });
                const { id, name, email, lastLogin, createdAt } = user;
                //send user data
                // create session for logged
                return res
                    .status(201)
                    .send({
                    user: { id, name, email, lastLogin, createdAt },
                    token: token,
                });
            }
            else {
                return res.status(401).send("Authentication failed");
            }
        }
        else {
            return res.status(401).send("Authentication failed");
        }
    }
    catch (error) {
        console.log(error);
    }
};
module.exports = {
    signup,
    login,
};
