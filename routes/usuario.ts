import { LoginUser } from './../controllers/Auth/Login';
import { Registro } from "../controllers/Auth/Registro";
import { Router } from "express";
import {validateLogin} from "../middlewares/validateLogin";
import { validateRegistration } from '../middlewares/validateRegistration';

const router = Router();

router.post("/login", validateLogin, LoginUser);
router.post("/registro", validateRegistration, Registro);

export default router;
