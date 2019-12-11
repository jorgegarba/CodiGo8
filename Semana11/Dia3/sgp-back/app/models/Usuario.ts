import {Sequelize, DataTypes} from 'sequelize';

export const usuario_model = (conexion: Sequelize)=>{
    const modelo = conexion.define("Usuario",{
        usu_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            unique:true
        },
        usu_email:{
            type:DataTypes.STRING(50),
            allowNull:false
        },
        usu_nom:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        usu_ape:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        usu_tipo:{
            type:DataTypes.STRING(45),
            allowNull:false
        },
        usu_hash:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        usu_salt:{
            type:DataTypes.TEXT,
            allowNull:false
        }
    },{
        tableName:"t_usuario",
        timestamps:true
    });
    return modelo;
}