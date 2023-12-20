import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Usuario from "../../models/usuario";

export const Registro = async (req: Request, res: Response) => {
 const { email, nombre , password } = req.body;
 
 const existingUser = await Usuario.findOne({ where: { email } });
 if (existingUser) {
  return res.status(400).json({ error: "Este email ya está en uso." });
 }

 //crear usuario en base de datos
 const hashedPassword = await bcrypt.hash(password, 10);
 const newUser = Usuario.build(
  {
    email,
    password: hashedPassword,
    status: "active",
    nombre
  },
 );

 await newUser.save();

 return res.json({
  message:
    "Tu registro ha sido exitoso.",
 });
}
