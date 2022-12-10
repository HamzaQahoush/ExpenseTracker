import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { User } from "../Models/User";

const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.jwt;
  const secretKey = process.env.secretKey;

  //check if token exist and is verifed
  if (token) {
    jwt.verify(token, secretKey, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.send("Validation Error , Please Login Again ");
      } else {
        console.log(decodedToken, "decodedToken");

        // token.userID= decodedToken.id
        req.query = { ...req.query, userId: decodedToken.id };

        next();
      }
    });
  } else {
    res.json({ msg: "You Should be logged In first" });
  }
};

const checkUser = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies.jwt;
  const secretKey = process.env.secretKey;

  if (token) {
    jwt.verify(token, secretKey, async (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.locals.user = null;

        next();
      } else {
        console.log(decodedToken.id, "user id >>>>>");
        let user = await User.findByPk(decodedToken.id);

        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};
export { requireAuth, checkUser };
// module.exports = { requireAuth, checkUser };
