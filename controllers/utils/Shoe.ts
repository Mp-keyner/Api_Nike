import { Request, Response } from "express";
import Shoe from '../../models/Shoe';

export const getShoes = async (req: Request, res: Response) => {
  const shoe = await Shoe.findAll({
    order: [
      ['createdAt', 'DESC'],
    ],
  });

  res.json({ shoe });
};
export const getShoe = async (req: Request, res: Response) => {
  const { id } = req.params;
  const shoe = await Shoe.findOne({
    where: { id },
    order: [
      ['createdAt', 'DESC'],
    ],
  });
  if (shoe) {
    res.json({ shoe });
  } else {
    res.status(404).json({
      msg: `No se encontro publicacion con id: ${id}`,
    });
  }
 };
 
export const getShoesByColors = async(req: Request, res: Response) => {
  const { color } = req.params;
  const shoe = await Shoe.findAll({
    where: {
      color: color
    },
    order: [
      ['createdAt', 'DESC'],
    ],
  });
  res.json({shoe});
 }
export const getShoesByType = async(req: Request, res: Response) => {
  const { type } = req.params;
  const shoe = await Shoe.findAll({
    where: {
      type: type
    },
    order: [
      ['createdAt', 'DESC'],
    ],
  });
  res.json({shoe});
 }
export const postShoe = async (req: Request, res: Response) => {
  const { body } = req;
  try {
    const shoe = await Shoe.create(body);
    res.json({ shoe });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Hable con el administrador de la base de datos",
      error: error,
    });
  }
};

