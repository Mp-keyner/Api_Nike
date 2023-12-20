const { isEmail } = require('validator');
import { Request, Response } from "express";

export function validateRegistration(req: Request, res: Response, next:any)  {
    const { email, password, password2 } = req.body;
  
    if (!email || !password || !password2) {
      return res.status(400).json({message: "Todos los campos son obligatorios"});
    }

    if (!isEmail(email)) {
      return res.status(400).json({message: "El nombre de usuario debe ser un correo electrónico válido"});
    }

    if(password.length < 10) {
      return res.status(400).json({message: "Tu contraseña debe ser mínimo de 10 caracteres"});
    }
  
    if (password !== password2) {
      return res.status(400).json({message: "Las contraseñas no coinciden"});
    }
  
    next(); 
  }

  