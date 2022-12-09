import express from "express";
const router = express.Router();
const expenseConroller =require('../Controllers/expenseController')
const {createExpense,updateExpense}=expenseConroller


router.post('/expense', createExpense)
router.put('/expense/:id', updateExpense)


module.exports = router;