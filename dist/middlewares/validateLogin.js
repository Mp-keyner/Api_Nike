"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLogin = void 0;
const { isEmail } = require('validator');
function validateLogin(req, res, next) {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ message: "Se requieren nombre de usuario y contraseña" });
    }
    if (!isEmail(email)) {
        return res.status(400).json({ message: "Debe ser un correo electrónico válido" });
    }
    next();
}
exports.validateLogin = validateLogin;
//# sourceMappingURL=validateLogin.js.map