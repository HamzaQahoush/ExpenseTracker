import express from "express";
const router = express.Router();
const expenseConroller = require("../Controllers/expenseController");
const { createExpense, updateExpense, deleteExpense } = expenseConroller;

router.post("/expense", createExpense);
router.put("/expense/:id", updateExpense);
router.delete("/expense/:id", deleteExpense);

module.exports = router;
