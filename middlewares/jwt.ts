import jwt from 'jsonwebtoken';
import Usuario from "../models/usuario";
import { Request, Response } from "express";
const SECRET_KEY = process.env.JWT_SECRET_KEY;

async function jwtMiddleware(req: Request, res: Response, next:any) {
 const authHeader = req.headers.authorization;

 if (!authHeader) {
   return res.status(401).json({message: "Se requiere Token de autenticación."});
 }

 const token = authHeader.split(' ')[1] || "";

 try {
   const decoded = jwt.verify(token, SECRET_KEY);
   const user = await Usuario.findOne({ where: { id: decoded.id } });

   if (!user) {
     return res.status(404).json({message: "Usuario no encontrado."});
   }

   req.user = decoded;
   next();
 } catch (err) {
   return res.status(401).json({message: "Token inválido."});
 }
}

export default jwtMiddleware;
