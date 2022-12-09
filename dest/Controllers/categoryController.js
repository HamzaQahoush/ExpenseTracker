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
                where: { id: user_id },
            });
            if (!user_is_exist) {
                res.json({ msg: "user not found" });
            }
            else {
                const category_is_exist = await Category_1.Category.findOne({
                    where: {
                        user_id: user_id,
                        name: name,
                    },
                });
                if (!category_is_exist) {
                    const data = {
                        user_id: user_id,
                        name: name,
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
const getCategory = async (req, res) => {
    const id = req.params.id;
    try {
        if (id) {
            const checkCategort = await Category_1.Category.findOne({
                where: {
                    id: id,
                },
            }).then((category) => {
                if (!category) {
                    res.json({ msg: "category not found" });
                }
                else {
                    res.json({ msg: "category found", category });
                }
            });
        }
    }
    catch (err) {
        res.json("Error " + err);
    }
};
const editCategory = async (req, res) => {
    try {
        const categID = req.params.id;
        const { name } = req.body;
        if (!name) {
            res.status(400).json({ msg: "Please fill all the  fields" });
        }
        else {
            Category_1.Category.findOne({
                where: {
                    id: categID,
                },
            }).then((category) => {
                if (!category) {
                    res.json({ msg: "category not found" });
                }
                else {
                    category.update({
                        name: name,
                    });
                    res.stjson({ msg: "category UPDATED!!", category });
                }
            });
        }
    }
    catch (err) {
        res.json("Error: " + err);
    }
};
module.exports = {
    createCategory,
    getCategory,
    editCategory,
};
