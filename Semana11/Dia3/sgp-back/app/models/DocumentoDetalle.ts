import { Sequelize, DataTypes } from 'sequelize';

export const documentodetalle_model = (conexion: Sequelize) => {
    const modelo = conexion.define("DocumentoDetalle", {
        docd_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        docd_cant: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        docd_punit: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        docd_tot: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false
        },
        docd_obs: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, {
        tableName: "t_documentodetalle",
        timestamps: true
    });
    return modelo;
}