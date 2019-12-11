import { Sequelize, DataTypes } from 'sequelize';

export const proyecto_model = (conexion: Sequelize) => {

  const modelo = conexion.define("proyecto",
    {
      pro_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      pro_nom: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      pro_fechin: {
        type: DataTypes.DATE,
        allowNull: false
      }, 
      pro_fechfin: {
        type: DataTypes.DATE,
        allowNull: false
      },
      pro_pres:{
        type:DataTypes.DECIMAL(10,2),
        allowNull:false
      },
      pro_est: {
        type: DataTypes.STRING(10),
        allowNull: false
      }
    },
    {
      tableName: 't_proyecto',
      // crear campos de auditoria, createdAt y updatedAt
      timestamps: true
    });

  return modelo;
}