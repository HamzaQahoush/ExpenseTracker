import { Category } from "../Models/Category";
import { Request, Response } from "express";
import { Expenses } from "../Models/Expenses";

const createExpense = async (req: Request, res: Response) => {
  try {
    const { user_id, category_id, spendingDate, amount } = req.body;
    if (!category_id || !user_id || !amount) {
      return res.status(400).json({ msg: "Please Fill all fields" });
    }

    const categ_is_exist = await Category.findOne({
      where: { id: category_id },
    });

    if (!categ_is_exist) {
      return res.json({ msg: "category not found , please create one" });
    } else {
      const data = {
        user_id: user_id,
        amount: amount,
        category_id: category_id,
        spendingDate: spendingDate,
      };
      await Expenses.create(data);
      res.status(201).json({ msg: data });
    }
  } catch (err) {
    res.json("Error: " + err);
  }
};

module.exports = {
  createExpense,
};
