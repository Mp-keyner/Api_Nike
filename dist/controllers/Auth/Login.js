"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUser = void 0;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const usuario_1 = __importDefault(require("../../models/usuario"));
const SECRET_KEY = process.env.JWT_SECRET_KEY;
const LoginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const usuario = await usuario_1.default.findOne({
            where: { email },
        });
        if (!usuario) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }
        const isPasswordValid = await bcrypt.compare(password, usuario.password);
        if (!isPasswordValid) {
            return res.status(500).json({ message: "Contraseña incorrecta" });
        }
        const token = jwt.sign({ id: usuario.id, username: usuario.email }, SECRET_KEY, { expiresIn: "1d" });
        res.json({
            token,
            usuario
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ error: error.toString() });
    }
};
exports.LoginUser = LoginUser;
//# sourceMappingURL=Login.js.map