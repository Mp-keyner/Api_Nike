"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const usuario_1 = __importDefault(require("../models/usuario"));
const SECRET_KEY = process.env.JWT_SECRET_KEY;
async function jwtMiddleware(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).json({ message: "Se requiere Token de autenticación." });
    }
    const token = authHeader.split(' ')[1] || "";
    try {
        const decoded = jsonwebtoken_1.default.verify(token, SECRET_KEY);
        const user = await usuario_1.default.findOne({ where: { id: decoded.id } });
        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado." });
        }
        req.user = decoded;
        next();
    }
    catch (err) {
        return res.status(401).json({ message: "Token inválido." });
    }
}
exports.default = jwtMiddleware;
//# sourceMappingURL=jwt.js.map