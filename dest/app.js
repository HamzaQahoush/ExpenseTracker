"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importing modules
// const express = require("express");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const dotnetenv = dotenv_1.default.config();
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dbConfig_1 = __importDefault(require("./dbConfig"));
// const db = require("./Models");
const userRoutes = require("./Routes/userRoutes");
const CategoryRoutes = require('./Routes/categoryRoutes');
//setting up your port
const PORT = process.env.PORT || 8080;
//assigning the variable app to express
const app = (0, express_1.default)();
//middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
//synchronizing the database and forcing it to false so we dont lose data
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("db has been re sync");
// });
//routes for the user API
app.use("/api/users", userRoutes);
app.use("/api/", CategoryRoutes);
const start = async () => {
    try {
        const db = await dbConfig_1.default.sync({ force: false });
        app.listen(PORT, async () => {
            console.log(`Server started on port ${PORT}`);
            console.log("Initializing Database:");
            // const user = db.getRepository(User);
            // const hamzaUser = new User();
            // hamzaUser.name = "Hamza";
            // hamzaUser.email = "ha@g.com";
            // hamzaUser.password = "123";
            // hamzaUser.lastLogin = new Date();
            // // await user.create({ ...hamzaUser });
            // await hamzaUser.save();
            // const ali = new User();
            // ali.name = "ali";
            // ali.email = "ali@g.com";
            // ali.password = "1299993";
            // ali.lastLogin = new Date();
            // await ali.save();
            // const whoIs = await user.findOne({
            //   where: {
            //     id: 1,
            //   },
            // });
            // console.log("whoIs=", whoIs);
            // const insuraceCat = new Category();
            // insuraceCat.name = "Insurace";
            // insuraceCat.userId = 1;
            // await insuraceCat.save();
        });
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
};
start();
