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
const updateExpense = async (req, res) => {
    try {
        const expenseId = req.params.id;
        const { amount, spendingDate } = req.body;
        if (!amount) {
            res
                .status(400)
                .json({ msg: "Please fill all the expense you wanna change" });
        }
        else {
            Expenses_1.Expenses.findOne({
                where: {
                    id: expenseId,
                },
            }).then((expense) => {
                if (!expense) {
                    res.status(404).json({ msg: "category not found" });
                }
                else {
                    expense.update({
                        amount: amount,
                        spendingDate: spendingDate,
                    });
                    res.status(200).json({ msg: "category UPDATED!!", expense });
                }
            });
        }
    }
    catch (err) {
        res.json("Error: " + err);
    }
};
const deleteExpense = async (req, res) => {
    const { userId } = req.query;
    try {
        const expenseId = req.params.id;
        Expenses_1.Expenses.destroy({
            where: {
                id: expenseId,
                user_id: userId,
            },
        }).then((expense) => {
            if (!expense) {
                res.status(404).json({ msg: "expense Not found " });
            }
            else {
                res.status(202).json({ msg: "Expense DELETED!!" });
            }
        });
    }
    catch (err) {
        res.json("Error: " + err);
    }
};
const listExpense = async (req, res) => {
    const { userId } = req.query;
    try {
        const date = req.query;
        if (!date) {
            res.status(404).json({ msg: "date  Not found " });
        }
    }
    catch (err) {
        res.json("Error: " + err);
    }
};
module.exports = {
    createExpense,
    updateExpense,
    deleteExpense,
};
