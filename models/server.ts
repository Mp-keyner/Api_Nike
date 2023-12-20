import dotenv from 'dotenv';
dotenv.config();
import express, { Application } from "express";
import userRoutes from "../routes/usuario";
import ShoesRoutes from "../routes/Shoe";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import db from "../db/connection";
import compression from 'compression';
import helmet from 'helmet';


class Server {
  private app: Application;
  private port: string;
  private apiPaths = {
    usuarios: "/api/usuarios",
    shoe: "/api/",
  };
  constructor() {
    this.app = express();
    this.port = process.env.PORT || "4000";
    this.app.use(morgan("dev"));
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded());
    this.app.use(express.json());
    this.routes();
    this.dbConnection();
    this.middlewares();
  }

  async dbConnection() {
    try {
      await db.sync({ alter: true });
      console.log("Data Conecction successful");
    } catch (error: any) {
      throw new Error(error);
    }
  }

  middlewares() {
    this.app.use(cors({
      origin: 'http://localhost:5173'
     }));
    this.app.use(express.static("public"));
    this.app.use(compression());
    this.app.use(helmet());
  }
  routes() {
    this.app.use(this.apiPaths.usuarios, userRoutes);
    this.app.use(this.apiPaths.shoe, ShoesRoutes);

  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`Servidor corriendo en el puerto  ${this.port}`);
    });
  }
}

export default Server;
