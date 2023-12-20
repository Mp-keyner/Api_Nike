"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Publication_1 = require("../controllers/Publication");
const router = (0, express_1.Router)();
router.get("/", Publication_1.getPublications);
router.get("/:theme", Publication_1.getPublicationsByTheme);
router.get("/id/:id", Publication_1.getPublication);
router.post("/", Publication_1.postPublication);
router.put("/id/:id", Publication_1.updatePublication);
router.delete("/id/:id", Publication_1.deletePublication);
exports.default = router;
//# sourceMappingURL=Publication.js.map