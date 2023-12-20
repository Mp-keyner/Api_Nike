import { Sequelize, DataTypes } from "sequelize";
import db from "../db/connection";

const Shoe = db.define(
 "Shoe",
 {
   id: {
     type: DataTypes.INTEGER,
     autoIncrement: true,
     primaryKey: true,
   },
   name: {
     type: DataTypes.TEXT,
     allowNull: false,
   },
   description: {
     type: DataTypes.TEXT,
     allowNull: false,
   },
   type: {
     type: DataTypes.ENUM("Women's", "Men's"),
     allowNull: false,
   },
   price: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   image: {
     type: DataTypes.STRING,
     allowNull: false,
   },
   images: {
     type: DataTypes.JSON,
     allowNull: false,
     defaultValue: [],
     get: function() {
       return JSON.parse(this.getDataValue('images'));
     }, 
     set: function(val) {
       return this.setDataValue('images', JSON.stringify(val));
     }
   },
   color: {
     type: DataTypes.TEXT,
     allowNull: false,
   },
   brand: {
     type: DataTypes.TEXT,
     allowNull: false,
   },
 },
 {
   timestamps: true,
 }
);

export default Shoe;
