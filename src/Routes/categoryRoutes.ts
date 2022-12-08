import express from "express";
const router = express.Router();
const categoryController = require("../Controllers/categoryController");

const {createCategory} = categoryController

router.post('/categories',createCategory)

module.exports = router;
