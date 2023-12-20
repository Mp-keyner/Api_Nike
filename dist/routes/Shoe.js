"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Shoe_1 = require("../controllers/utils/Shoe");
const jwt_1 = __importDefault(require("../middlewares/jwt"));
const router = (0, express_1.Router)();
router.get("/", jwt_1.default, Shoe_1.getShoes);
router.get("/:color", jwt_1.default, Shoe_1.getShoesByColors);
router.get("/id/:id", jwt_1.default, Shoe_1.getShoe);
router.get("/type/:type", jwt_1.default, Shoe_1.getShoesByType);
router.post("/", jwt_1.default, Shoe_1.postShoe);
exports.default = router;
//# sourceMappingURL=Shoe.js.map