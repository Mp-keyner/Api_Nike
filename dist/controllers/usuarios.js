"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.updateUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const getUsuarios = async (req, res) => {
    const usuarios = await usuario_1.default.findAll();
    res.json({ usuarios });
};
exports.getUsuarios = getUsuarios;
const getUsuario = async (req, res) => {
    const { id } = req.params;
    const usuario = await usuario_1.default.findByPk(id);
    if (usuario) {
        res.json({ usuario });
    }
    else {
        res.status(404).json({
            msg: `No se encontro usuario con id: ${id}`,
        });
    }
};
exports.getUsuario = getUsuario;
const postUsuario = async (req, res) => {
    const { body } = req;
    try {
        const usuario = await usuario_1.default.create(body);
        await usuario.save();
        res.json({ usuario });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador de la base de datos",
            error: error,
        });
    }
};
exports.postUsuario = postUsuario;
const updateUsuario = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: "Update_Usuarios",
        body,
        id,
    });
};
exports.updateUsuario = updateUsuario;
const deleteUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "Delete_Usuarios",
        id,
    });
};
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuarios.js.map