import { Router } from "express";
import {
  getShoe,
  getShoesByColors,
  postShoe,
  getShoes,
  getShoesByType
} from "../controllers/utils/Shoe";
import jwtMiddleware from "../middlewares/jwt";

const router = Router();
router.get("/", jwtMiddleware, getShoes);
router.get("/:color", jwtMiddleware, getShoesByColors);
router.get("/id/:id", jwtMiddleware, getShoe);
router.get("/type/:type", jwtMiddleware, getShoesByType);
router.post("/", jwtMiddleware, postShoe);
export default router;
