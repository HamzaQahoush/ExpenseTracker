import { User } from "../Models/User";
import { Category } from "../Models/Category";
import { Request, Response } from "express";

const createCategory = async (req: Request, res: Response) => {
  const { userId } = req.query;

  try {
    const { name } = req.body as { name: string };
    if (!name || typeof name != "string") {
      res
        .status(400)
        .json({ msg: "Please Fill all fields with correct format" });
    } else {
      const user_is_exist = await User.findOne({
        where: { id: userId },
      });
      if (!user_is_exist) {
        res.status(404).json({ msg: "user not found" });
      } else {
        const category_is_exist = await Category.findOne({
          where: {
            user_id: userId,
            name: name,
          },
        });
        if (!category_is_exist) {
          const data = {
            user_id: userId,
            name: name,
          };
          await Category.create(data);
          res.status(201).json({ msg: data });
        } else {
          res.status(409).json({ msg: "category already exist" });
        }
      }
    }
  } catch (err) {
    res.json("Error: " + err);
  }
};

const getCategory = async (req: Request, res: Response) => {
  const { userId } = req.query;

  const id = req.params.id;
  try {
    if (id) {
      const checkCategort = await Category.findOne({
        where: {
          id: id,
          user_id: userId,
        },
      }).then((category: any) => {
        if (!category) {
          res
            .status(404)
            .json({ msg: "You Do Not have this category  , please add one" });
        } else {
          res.status(200).json({ msg: "category found", category });
        }
      });
    }
  } catch (err) {
    res.json("Error " + err);
  }
};

const editCategory = async (req: Request, res: Response) => {
  const { userId } = req.query;

  try {
    const categID: string = req.params.id;

    const { name } = req.body;
    if (!name) {
      res.status(400).json({ msg: "Please fill all the  fields" });
    } else {
      Category.findOne({
        where: {
          id: categID,
          user_id: userId,
        },
      }).then((category: any) => {
        if (!category) {
          res.status(404).json({ msg: "category not found" });
        } else {
          category.update({
            name: name,
          });
          res.status(200).json({ msg: "category UPDATED!!", category });
        }
      });
    }
  } catch (err) {
    res.json("Error: " + err);
  }
};

const listAllCategories = async (req: Request, res: Response) => {
  try {
    const { userId } = req.query;

    const allCategoriers = await Category.findAll({
      where: { user_id: userId },
    });
    if (allCategoriers.length === 0) {
      res.status(404).json({ msg: "categories not found" });
    } else {
      const allCategoriersData = allCategoriers.map((category: any) => {
        return category.name;
      });
      res.status(200).json({ msg: "categories found", allCategoriersData });
    }
  } catch (err) {
    res.json("Error " + err);
  }
};
module.exports = {
  createCategory,
  getCategory,
  editCategory,
  listAllCategories,
};
