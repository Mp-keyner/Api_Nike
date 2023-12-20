"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postShoe = exports.getShoesByType = exports.getShoesByColors = exports.getShoe = exports.getShoes = void 0;
const Shoe_1 = __importDefault(require("../models/Shoe"));
const getShoes = async (req, res) => {
    const shoe = await Shoe_1.default.findAll({
        order: [
            ['createdAt', 'DESC'],
        ],
    });
    res.json({ shoe });
};
exports.getShoes = getShoes;
const getShoe = async (req, res) => {
    const { id } = req.params;
    const shoe = await Shoe_1.default.findOne({
        where: { id },
        order: [
            ['createdAt', 'DESC'],
        ],
    });
    if (shoe) {
        res.json({ shoe });
    }
    else {
        res.status(404).json({
            msg: `No se encontro publicacion con id: ${id}`,
        });
    }
};
exports.getShoe = getShoe;
const getShoesByColors = async (req, res) => {
    const { color } = req.params;
    const shoe = await Shoe_1.default.findAll({
        where: {
            color: color
        },
        order: [
            ['createdAt', 'DESC'],
        ],
    });
    res.json({ shoe });
};
exports.getShoesByColors = getShoesByColors;
const getShoesByType = async (req, res) => {
    const { type } = req.params;
    const shoe = await Shoe_1.default.findAll({
        where: {
            type: type
        },
        order: [
            ['createdAt', 'DESC'],
        ],
    });
    res.json({ shoe });
};
exports.getShoesByType = getShoesByType;
const postShoe = async (req, res) => {
    const { body } = req;
    try {
        const shoe = await Shoe_1.default.create(body);
        res.json({ shoe });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador de la base de datos",
            error: error,
        });
    }
};
exports.postShoe = postShoe;
//# sourceMappingURL=Shoe.js.map