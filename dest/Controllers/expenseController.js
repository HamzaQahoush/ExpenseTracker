"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Category_1 = require("../Models/Category");
const Expenses_1 = require("../Models/Expenses");
const createExpense = async (req, res) => {
    const { userId } = req.query;
    try {
        const { category_id, spendingDate, amount } = req.body;
        if (!category_id || !amount) {
            return res.status(400).json({ msg: "Please Fill all fields" });
        }
        const categ_is_exist = await Category_1.Category.findOne({
            where: { id: category_id },
        });
        if (!categ_is_exist) {
            return res.json({ msg: "category not found , please create one" });
        }
        else {
            const data = {
                user_id: userId,
                amount: amount,
                category_id: category_id,
                spendingDate: spendingDate,
            };
            await Expenses_1.Expenses.create(data);
            res.status(201).json({ msg: data });
        }
    }
    catch (err) {
        res.json("Error: " + err);
    }
};
module.exports = {
    createExpense,
};
