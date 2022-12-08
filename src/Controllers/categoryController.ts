import { User } from "../Models/User";
import { Category } from "../Models/Category";
import { Request, Response } from "express";

const createCategory = async (req: Request, res: Response) => {
    try {
        const { name, user_id } = req.body
        if (!name || !user_id){
            res.status(400).json({ msg: "Please enter all fields" });
        }else{
            const user_is_exist = await User.findOne({
                where : {id : user_id}
            });
            if (!user_is_exist){
                res.json({msg : "user not found"})
            }else{
                const category_is_exist = await Category.findOne({
                    where : {
                        user_id : user_id,
                        name : name
                    }
                });
                if (!category_is_exist){
                    const data = {
                        user_id : user_id,
                        name : name
                    }
                    await Category.create(data)
                    res.json({msg : "category created"})
                }else{
                    res.json({msg : "category already exist"})
                }
            }
        }
    }catch(err){
        res.json("Error: " + err);
    }
}
module.exports = {
    createCategory
  };
