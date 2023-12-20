"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postComment = exports.getCommentsById = exports.getComments = exports.deletePublication = exports.updatePublication = exports.postPublication = exports.getPublicationsByTheme = exports.getPublication = exports.getPublications = void 0;
const publication_1 = __importDefault(require("../models/publication"));
const comment_1 = __importDefault(require("../models/comment"));
const usuario_1 = __importDefault(require("../models/usuario"));
const getPublications = async (req, res) => {
    const publication = await publication_1.default.findAll({
        include: [
            {
                model: comment_1.default,
                include: [{ model: usuario_1.default }],
            },
            {
                model: usuario_1.default,
            },
        ],
        order: [
            ['createdAt', 'DESC'],
        ],
    });
    res.json({ publication });
};
exports.getPublications = getPublications;
const getPublication = async (req, res) => {
    const { id } = req.params;
    const publication = await publication_1.default.findOne({
        where: { id },
        include: [
            {
                model: comment_1.default,
                include: [{ model: usuario_1.default }],
            },
            {
                model: usuario_1.default,
            },
        ],
        order: [
            ['createdAt', 'DESC'],
        ],
    });
    if (publication) {
        res.json({ publication });
    }
    else {
        res.status(404).json({
            msg: `No se encontro publicacion con id: ${id}`,
        });
    }
};
exports.getPublication = getPublication;
const getPublicationsByTheme = async (req, res) => {
    const { theme } = req.params;
    const publication = await publication_1.default.findAll({
        where: {
            theme: theme
        },
        include: [
            {
                model: usuario_1.default,
            },
            {
                model: comment_1.default,
            },
        ],
        order: [
            ['createdAt', 'DESC'],
        ],
    });
    res.json({ publication });
};
exports.getPublicationsByTheme = getPublicationsByTheme;
const postPublication = async (req, res) => {
    const { body } = req;
    try {
        const publication = await publication_1.default.create(body);
        res.json({ publication });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador de la base de datos",
            error: error,
        });
    }
};
exports.postPublication = postPublication;
const updatePublication = async (req, res) => {
    const { body } = req;
    const { id } = req.params;
    try {
        const [numberOfAffectedRows, affectedRows] = await publication_1.default.update(body, {
            where: { id },
            returning: true,
        });
        res.json({
            msg: "Publicación actualizada",
            updatedPublication: affectedRows[0],
            Publication: publication_1.default
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador de la base de datos",
            error: error,
        });
    }
};
exports.updatePublication = updatePublication;
const deletePublication = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: "Delete_publicacion",
        id,
    });
};
exports.deletePublication = deletePublication;
const getComments = async (req, res) => {
    console.log('commente');
    const comment = await comment_1.default.findAll({
        order: [
            ['createdAt', 'DESC'],
        ],
    });
    res.json({ comment });
};
exports.getComments = getComments;
const getCommentsById = async (req, res) => {
    const { id } = req.params;
    const comment = await comment_1.default.findAll({
        where: {
            publicationId: id
        },
        include: [
            {
                model: usuario_1.default,
            },
        ],
    });
    res.json({ comment });
};
exports.getCommentsById = getCommentsById;
const postComment = async (req, res) => {
    const { body } = req;
    try {
        const comment = await comment_1.default.create(body);
        res.json({ comment });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Hable con el administrador de la base de datos",
        });
    }
};
exports.postComment = postComment;
//# sourceMappingURL=Publication.js.map