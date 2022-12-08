import { Sequelize } from "sequelize-typescript";
import { Category } from "./Models/Category";
import { Expenses } from "./Models/Expenses";
import { User } from "./Models/User";

const connection = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  username: "hamza",
  password: "1234",
  database: "postgres",
  logging: false,
  models: [Category, Expenses, User],
});

export default connection;
