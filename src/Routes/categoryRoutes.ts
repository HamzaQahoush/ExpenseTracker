import express from "express";
const router = express.Router();
const categoryController = require("../Controllers/categoryController");

const {createCategory,getCategory,editCategory} = categoryController

router.post('/categories',createCategory)
router.get('/categories/:id', getCategory )
router.put('/categories/:id', editCategory )


module.exports = router;
