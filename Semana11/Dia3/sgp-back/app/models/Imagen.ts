import {Sequelize, DataTypes} from 'sequelize';
export const imagen_model =(conexion: Sequelize)=>{
    const modelo = conexion.define("Imagen",{
        ima_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
            unique:true
        },
        ima_url:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    },{
        tableName:"t_imagen",
        timestamps:true
    });
    return modelo;

}