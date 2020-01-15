import { Sequelize, DataTypes, Model } from 'sequelize';
export const recurso_model = (conexion: Sequelize) => {
    const modelo = conexion.define("Recurso", {
        rec_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            unique: true
        },
        rec_nom: {
            type: DataTypes.STRING(80),
            allowNull: false
        }
    }, {
        tableName: "t_recurso",
        timestamps: true
    });
    return modelo;
}