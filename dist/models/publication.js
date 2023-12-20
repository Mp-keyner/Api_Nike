"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const usuario_1 = __importDefault(require("./usuario"));
const Publication = connection_1.default.define("Publication", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    publication: {
        type: sequelize_1.DataTypes.STRING(1000),
        allowNull: false,
    },
    likes: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0,
    },
    answers: {
        type: sequelize_1.DataTypes.INTEGER,
        defaultValue: 0,
    },
    theme: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: true,
});
usuario_1.default.hasMany(Publication, { foreignKey: "userId" });
Publication.belongsTo(usuario_1.default, { foreignKey: "userId" });
exports.default = Publication;
//# sourceMappingURL=publication.js.map