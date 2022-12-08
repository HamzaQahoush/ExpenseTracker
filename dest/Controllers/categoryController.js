"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../Models/User");
const Category_1 = require("../Models/Category");
const createCategory = async (req, res) => {
    try {
        const { name, user_id } = req.body;
        if (!name || !user_id) {
            res.status(400).json({ msg: "Please enter all fields" });
        }
        else {
            const user_is_exist = await User_1.User.findOne({
                where: { id: user_id }
            });
            if (!user_is_exist) {
                res.json({ msg: "user not found" });
            }
            else {
                const category_is_exist = await Category_1.Category.findOne({
                    where: {
                        user_id: user_id,
                        name: name
                    }
                });
                if (!category_is_exist) {
                    const data = {
                        user_id: user_id,
                        name: name
                    };
                    await Category_1.Category.create(data);
                    res.json({ msg: "category created" });
                }
                else {
                    res.json({ msg: "category already exist" });
                }
            }
        }
    }
    catch (err) {
        res.json("Error: " + err);
    }
};
module.exports = {
    createCategory
};
