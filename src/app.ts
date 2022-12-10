//importing modules
import express from "express";

import dotenv from "dotenv";
const dotnetenv = dotenv.config();

import cookieParser from "cookie-parser";
import connection from "./dbConfig";
const userRoutes = require("./Routes/userRoutes");
const CategoryRoutes = require("./Routes/categoryRoutes");
const expenseRoutes = require("./Routes/expenseRoutes");
const { requireAuth, checkUser } = require("./Middleware/authMiddleware");
//setting up your port
const PORT = process.env.PORT || 8080;

//assigning the variable app to express
const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("*", checkUser);
//routes for the user API
app.use("/api/users", userRoutes);
// routes for categories
app.use("/api/", requireAuth, CategoryRoutes);
// routes for Expneses
app.use("/api/", requireAuth, expenseRoutes);

const start = async (): Promise<void> => {
  try {
    const db = await connection.sync({ force: false });
    app.listen(PORT, async () => {
      console.log(`Server started on port ${PORT}`);
      console.log("Initializing Database:");
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

start();
