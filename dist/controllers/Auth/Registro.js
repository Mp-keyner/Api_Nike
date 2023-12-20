"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Registro = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const usuario_1 = __importDefault(require("../../models/usuario"));
const Registro = async (req, res) => {
    const { email, nombre, password } = req.body;
    const existingUser = await usuario_1.default.findOne({ where: { email } });
    if (existingUser) {
        return res.status(400).json({ error: "Este email ya está en uso." });
    }
    //crear usuario en base de datos
    const hashedPassword = await bcrypt_1.default.hash(password, 10);
    const newUser = usuario_1.default.build({
        email,
        password: hashedPassword,
        status: "active",
        nombre
    });
    await newUser.save();
    return res.json({
        message: "Tu registro ha sido exitoso.",
    });
};
exports.Registro = Registro;
//# sourceMappingURL=Registro.js.map