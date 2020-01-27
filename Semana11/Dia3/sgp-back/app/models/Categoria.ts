import { Sequelize, DataTypes } from 'sequelize';

export const categoria_model = (conexion: Sequelize) => {
    const modelo = conexion.define("Categoria", {
        cat_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        cat_nom: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        cat_desc: {
            type: DataTypes.STRING(45),
            allowNull: false,
            defaultValue: ''
        }
    }, {
        tableName: "t_categoria",
        timestamps: true
    });
    return modelo;
}