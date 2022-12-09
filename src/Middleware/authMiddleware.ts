import { NextFunction, Request, Response } from 'express'
import jwt from 'jsonwebtoken'

const requireAuth=(req:Request,res:Response,next:NextFunction)=>{
    const token=req.cookies.jwt
    const secretKey=process.env.secretKey

    //check if token exist and is verifed 
    if (token){
jwt.verify(token,secretKey, (err,decodedToken)=>{
    if (err){
        console.log(err.message);
        res.send('Validation Error , Please Login Again ')
        
    }
    else {
        console.log(decodedToken);
        next()
        
    }
})
    }
    else {
        res.json({'msg': 'You Should be logged In first'})
    }
}


module.exports = {requireAuth}