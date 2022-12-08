import {
  Column,
  DataType,
  Table,
  Model,
  AutoIncrement,
} from "sequelize-typescript";

@Table({ timestamps: true, tableName: "users" })
export class User extends Model {
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

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    },
  })
  email: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    // validate: {
    //   is: /^[0-9a-f]{64}$/i
    // }
  })
  password: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  lastLogin: Date;
}
