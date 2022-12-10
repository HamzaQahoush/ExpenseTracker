import { Category } from "../Models/Category";
import { Request, Response } from "express";
import { Expenses } from "../Models/Expenses";

export const createExpense = async (req: Request, res: Response) => {
  const { userId } = req.query;

  try {
    const { category_id, spendingDate, amount } = req.body;
    if (!category_id || !amount) {
      return res.status(400).json({ msg: "Please Fill all fields" });
    }

    const categ_is_exist = await Category.findOne({
      where: { id: category_id },
    });

    if (!categ_is_exist) {
      return res.json({ msg: "category not found , please create one" });
    } else {
      const data = {
        user_id: userId,
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

export const updateExpense = async (req: Request, res: Response) => {
  try {
    const expenseId: string = req.params.id;

    const { amount, spendingDate } = req.body;
    if (!amount) {
      res
        .status(400)
        .json({ msg: "Please fill all the expense you wanna change" });
    } else {
      Expenses.findOne({
        where: {
          id: expenseId,
        },
      }).then((expense: any) => {
        if (!expense) {
          res.status(404).json({ msg: "category not found" });
        } else {
          expense.update({
            amount: amount,
            spendingDate: spendingDate,
          });
          res.status(200).json({ msg: "category UPDATED!!", expense });
        }
      });
    }
  } catch (err) {
    res.json("Error: " + err);
  }
};
export const deleteExpense = async (req: Request, res: Response) => {
  const { userId } = req.query;

  try {
    const expenseId: string = req.params.id;
    Expenses.destroy({
      where: {
        id: expenseId,
        user_id: userId,
      },
    }).then((expense: any) => {
      if (!expense) {
        res.status(404).json({ msg: "expense Not found " });
      } else {
        res.status(202).json({ msg: "Expense DELETED!!" });
      }
    });
  } catch (err) {
    res.json("Error: " + err);
  }
};

export const listExpense = async (req: Request, res: Response) => {
  try {
    const { userId, rdate } = req.query;
    const date = req.query;
    if (!date) res.status(404).json({ msg: "date not found " });

    const allExpenses = await Expenses.findAll({
      where: {
        // spendingDate: rdate,
        user_id: userId,
      },
      order: ["spendingDate"],
    }).then((expneses) => {
      if (expneses.length === 0) {
        res.status(404).json({ msg: "expense Not found " });
      } else {
        res.status(200).json({ msg: "category founded!!!", expneses });
      }
    });
  } catch (err) {
    res.json("Error: " + err);
  }
};
