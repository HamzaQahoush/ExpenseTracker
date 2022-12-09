import express from "express";
const router = express.Router();
const categoryController = require("../Controllers/categoryController");

const {createCategory,getCategory} = categoryController

router.post('/categories',createCategory)
router.get('/categories/:id', getCategory )

module.exports = router;
