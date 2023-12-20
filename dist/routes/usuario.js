"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Login_1 = require("./../controllers/Auth/Login");
const Registro_1 = require("../controllers/Auth/Registro");
const express_1 = require("express");
const validateLogin_1 = require("../middlewares/validateLogin");
const validateRegistration_1 = require("../middlewares/validateRegistration");
const router = (0, express_1.Router)();
router.post("/login", validateLogin_1.validateLogin, Login_1.LoginUser);
router.post("/registro", validateRegistration_1.validateRegistration, Registro_1.Registro);
exports.default = router;
//# sourceMappingURL=usuario.js.map