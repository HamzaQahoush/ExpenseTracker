"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createExpense = async (req, res) => {
    try {
        const { user_id, category_id, spendingDate, amount } = req.body;
        console.log(req.body, "req.body>>>>>>>..");
        // if (!category_id || !user_id || amount) {
        //   res.status(400).json({ msg: "Please Fill all fields" });
        // }
        // else {
        //   const categ_is_exist = await Category.findOne({
        //     where: { id: category_id },
        //   });
        //   if (!categ_is_exist) {
        //     res.json({ msg: "category not found , please create one" });
        //   } else {
        //     const data = {
        //       user_id: user_id,
        //       amount: amount,
        //       category_id: category_id,
        //       spendingDate: spendingDate,
        //     };
        //     await Expenses.create(data);
        //     res.json({ msg: data });
        //   }
        // }
    }
    finally { }
    ;
    module.exports = {
        createExpense
    };
};
