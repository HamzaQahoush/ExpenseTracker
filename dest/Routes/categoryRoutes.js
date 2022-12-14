"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const categoryController = require("../Controllers/categoryController");
const { createCategory, getCategory, editCategory, listAllCategories } = categoryController;
router.post("/categories", createCategory);
router.get("/categories/:id", getCategory);
router.get("/categories", listAllCategories);
router.put("/categories/:id", editCategory);
module.exports = router;
