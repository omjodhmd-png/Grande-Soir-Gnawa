import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Booking = sequelize.define("Booking", {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },

  code: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false
  },

  qr: {
    type: DataTypes.TEXT,   
    allowNull: false
  },
  
  artistId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

export default Booking;
