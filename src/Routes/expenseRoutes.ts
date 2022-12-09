import express from "express";
const router = express.Router();
import {listExpense, createExpense, deleteExpense, updateExpense} from '../Controllers/expenseController'
const expenseConroller = require("../Controllers/expenseController");
// const { createExpense, updateExpense, deleteExpense, listExpense } =
//   expenseConroller;

router.post("/expense", createExpense);
router.get("/getExpenses", listExpense);

router.put("/expense/:id", updateExpense);
router.delete("/expense/:id", deleteExpense);

module.exports = router;
