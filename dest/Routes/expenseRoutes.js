"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const expenseConroller = require('../Controllers/expenseController');
const { createExpense, updateExpense } = expenseConroller;
router.post('/expense', createExpense);
router.put('/expense/:id', updateExpense);
module.exports = router;
