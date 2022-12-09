"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const categoryController = require("../Controllers/categoryController");
const { createCategory, getCategory } = categoryController;
router.post('/categories', createCategory);
router.get('/categories/:id', getCategory);
module.exports = router;
