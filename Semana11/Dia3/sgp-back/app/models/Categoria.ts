import {Sequelize, DataTypes} from 'sequelize';

export const categoria_model = (conexion: Sequelize)=>{
    const modelo = conexion.define("Categoria",{
        cat_id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull:false,
            unique:true
        }
    })
}