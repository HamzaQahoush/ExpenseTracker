"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Expenses = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Category_1 = require("./Category");
const User_1 = require("./User");
let Expenses = class Expenses extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.AutoIncrement,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        primaryKey: true,
    }),
    __metadata("design:type", Number)
], Expenses.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => User_1.User),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Expenses.prototype, "user_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Category_1.Category),
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Expenses.prototype, "category_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATEONLY,
        allowNull: true,
    }),
    __metadata("design:type", Date)
], Expenses.prototype, "spendingDate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DOUBLE,
        allowNull: true,
    }),
    __metadata("design:type", Number)
], Expenses.prototype, "amount", void 0);
Expenses = __decorate([
    (0, sequelize_typescript_1.Table)({ timestamps: true, tableName: "expenses" })
], Expenses);
exports.Expenses = Expenses;
