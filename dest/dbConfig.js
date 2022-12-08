"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const Category_1 = require("./Models/Category");
const Expenses_1 = require("./Models/Expenses");
const User_1 = require("./Models/User");
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "postgres",
    host: "localhost",
    username: "hamza",
    password: "1234",
    database: "postgres",
    logging: false,
    models: [Category_1.Category, Expenses_1.Expenses, User_1.User],
});
exports.default = connection;
