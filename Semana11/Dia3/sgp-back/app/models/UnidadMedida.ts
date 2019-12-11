import { Sequelize, DataTypes } from 'sequelize';

export const unidadmedida_model = (conexion: Sequelize) => {
    const modelo = conexion.define("unidadMedida",
        {
            um_id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                unique: true,
                autoIncrement: true,
                allowNull: false
            },
            um_nom: {
                type: DataTypes.STRING(45),
                allowNull: false
            },
            um_abr: {
                type: DataTypes.STRING(45),
                allowNull: false
            }
        },
        {
            tableName:'t_unidadmedida',
            timestamps:true
        });
    return modelo;
}