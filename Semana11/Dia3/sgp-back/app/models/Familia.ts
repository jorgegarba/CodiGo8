import { Sequelize, DataTypes } from 'sequelize';

export const familia_model = (conexion: Sequelize) => {
    const modelo = conexion.define("Familia", {
        fam_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        fam_nom: {
            type: DataTypes.STRING(45),
            allowNull: false
        }
    }, {
        tableName: "t_familia",
        timestamps: true
    });
    return modelo;
}