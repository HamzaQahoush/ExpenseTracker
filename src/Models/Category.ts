import {
  Column,
  DataType,
  Table,
  Model,
  ForeignKey,
  BelongsTo,
  AutoIncrement,
} from "sequelize-typescript";
import { User } from "./User";

@Table({ timestamps: false, tableName: "category" })
export class Category extends Model {
  @AutoIncrement
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  name: string;

  @ForeignKey(() => User)
  @Column({
    onDelete: "CASCADE",
  })
  user_id: number;
  @BelongsTo(() => User)
  user: User;
}
