import express from "express";
const router = express.Router();
const expenseConroller =require('../Controllers/expenseController')
const {createExpense}=expenseConroller


router.post('/expense', createExpense)

module.exports = router;