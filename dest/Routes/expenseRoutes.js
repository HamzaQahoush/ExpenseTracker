"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const expenseController_1 = require("../Controllers/expenseController");
const expenseConroller = require("../Controllers/expenseController");
// const { createExpense, updateExpense, deleteExpense, listExpense } =
//   expenseConroller;
router.post("/expense", expenseController_1.createExpense);
router.get("/getExpenses", expenseController_1.listExpense);
router.put("/expense/:id", expenseController_1.updateExpense);
router.delete("/expense/:id", expenseController_1.deleteExpense);
module.exports = router;
