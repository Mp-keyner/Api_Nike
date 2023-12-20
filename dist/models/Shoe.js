"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const Shoe = connection_1.default.define("Shoe", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    description: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    type: {
        type: sequelize_1.DataTypes.ENUM("Women's", "Men's"),
        allowNull: false,
    },
    price: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    images: {
        type: sequelize_1.DataTypes.JSON,
        allowNull: false,
        defaultValue: [],
        get: function () {
            return JSON.parse(this.getDataValue('images'));
        },
        set: function (val) {
            return this.setDataValue('images', JSON.stringify(val));
        }
    },
    color: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
    brand: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
}, {
    timestamps: true,
});
exports.default = Shoe;
//# sourceMappingURL=Shoe.js.map