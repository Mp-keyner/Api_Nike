"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_1 = __importDefault(require("./usuario"));
const publication_1 = __importDefault(require("./publication"));
const comment_1 = __importDefault(require("./comment"));
usuario_1.default.hasMany(comment_1.default, { foreignKey: "userId" });
comment_1.default.belongsTo(usuario_1.default, { foreignKey: "userId" });
publication_1.default.hasMany(comment_1.default, { foreignKey: "publicationId" });
comment_1.default.belongsTo(publication_1.default, { foreignKey: "publicationId" });
usuario_1.default.hasMany(publication_1.default, { foreignKey: "recipientId" });
comment_1.default.belongsTo(usuario_1.default, { foreignKey: "recipientId" });
//# sourceMappingURL=relations.js.map