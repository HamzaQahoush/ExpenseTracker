import express from "express";
const router = express.Router();
const categoryController = require("../Controllers/categoryController");

const { createCategory, getCategory, editCategory, listAllCategories } =
  categoryController;

router.post("/categories", createCategory);
router.get("/categories/:id", getCategory);
router.get("/allcategories/:userID", listAllCategories);
router.put("/categories/:id", editCategory);

module.exports = router;
