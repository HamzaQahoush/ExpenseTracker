"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//importing modules
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const dotnetenv = dotenv_1.default.config();
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const dbConfig_1 = __importDefault(require("./dbConfig"));
const userRoutes = require("./Routes/userRoutes");
const CategoryRoutes = require("./Routes/categoryRoutes");
const expenseRoutes = require("./Routes/expenseRoutes");
const { requireAuth, checkUser } = require("./Middleware/authMiddleware");
//setting up your port
const PORT = process.env.PORT || 8080;
//assigning the variable app to express
const app = (0, express_1.default)();
//middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.get("*", checkUser);
//routes for the user API
app.use("/api/users", userRoutes);
// routes for categories
app.use("/api/", requireAuth, CategoryRoutes);
// routes for Expneses
app.use("/api/", requireAuth, expenseRoutes);
const start = async () => {
    try {
        const db = await dbConfig_1.default.sync({ force: false });
        app.listen(PORT, async () => {
            console.log(`Server started on port ${PORT}`);
            console.log("Initializing Database:");
        });
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
};
start();
