"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const usuario_1 = __importDefault(require("./usuario"));
const publication_1 = __importDefault(require("./publication"));
const Comment = connection_1.default.define("Comment", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    publicationId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    message: {
        type: sequelize_1.DataTypes.TEXT,
        allowNull: false,
    },
}, {
    timestamps: true,
});
usuario_1.default.hasMany(Comment, { foreignKey: "userId" });
Comment.belongsTo(usuario_1.default, { foreignKey: "userId" });
publication_1.default.hasMany(Comment, { foreignKey: "publicationId" });
Comment.belongsTo(publication_1.default, { foreignKey: "publicationId" });
exports.default = Comment;
//# sourceMappingURL=comment.js.map