"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Publication_1 = require("../controllers/Publication");
const router = (0, express_1.Router)();
router.get("/", Publication_1.getComments);
router.post("/", Publication_1.postComment);
router.get("/:id", Publication_1.getCommentsById);
exports.default = router;
//# sourceMappingURL=Comment.js.map