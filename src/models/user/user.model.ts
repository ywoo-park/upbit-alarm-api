import {sequelize} from "../index";
import {Model, DataTypes, Optional} from "sequelize";

export interface UserAttributes {
    id?: number
    email: string
    password: string
    token?: string
}

// Some fields are optional when calling UserModel.create() or UserModel.build()
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

// We need to declare an interface for our model that is basically what our class would be
interface UserInstance
    extends Model<UserAttributes, UserCreationAttributes>,
        UserAttributes {}

export const UserModel = sequelize.define<UserInstance>('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    token: {
        type: DataTypes.STRING,
    },
}, {
    freezeTableName: true
});