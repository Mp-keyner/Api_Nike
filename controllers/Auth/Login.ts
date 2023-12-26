import { Request, Response } from "express";
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
import Usuario from "../../models/usuario";
import { UserType } from "../../interfaces";
const SECRET_KEY = process.env.JWT_SECRET_KEY;


export const LoginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const usuario: UserType = await Usuario.findOne({
      where: { email },
    })!;

    if (!usuario) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    const isPasswordValid = await bcrypt.compare(password, usuario.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    }
    const token = jwt.sign(
      { id: usuario.id, username: usuario.email },
      SECRET_KEY,
      { expiresIn: "1d" }
    );
    res.json({
      token,
      usuario
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.toString() });
   }
   
}