import {
  Column,
  DataType,
  Table,
  Model,
  ForeignKey,
  AutoIncrement,
} from "sequelize-typescript";
import { Category } from "./Category";
import { User } from "./User";

@Table({ timestamps: true, tableName: "expenses" })
export class Expenses extends Model {
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => User)
  @Column
  user_id: number;

  @ForeignKey(() => Category)
  category_id: number;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  spendingDate: Date;

  @Column({
    type: DataType.DOUBLE,
    allowNull: true,
    primaryKey: true,
  })
  amount: number;
}
