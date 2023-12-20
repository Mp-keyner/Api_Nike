const { isEmail } = require('validator');
import { Request, Response } from "express";

export function validateLogin(req: Request, res: Response, next:any) {
    const { email, password } = req.body;
  
    if (!email || !password) {
      return res.status(400).json({message: "Se requieren nombre de usuario y contraseña"});
    }

    if (!isEmail(email)) {
      return res.status(400).json({message: "Debe ser un correo electrónico válido"}); 
      }
  
    next();
  }
  

  