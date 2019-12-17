import { Sequelize, DataTypes } from 'sequelize';

export const producto_model = (conexion: Sequelize) => {
  const modelo = conexion.define("producto", {
    prod_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      unique: true
    },
    prod_nom: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    prod_desc: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: "t_producto",
    timestamps: true
  });
  return modelo;
}