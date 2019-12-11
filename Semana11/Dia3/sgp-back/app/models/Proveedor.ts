import {Sequelize, DataTypes} from 'sequelize'

export const proveedor_model = (conexion: Sequelize)=>{
    const modelo = conexion.define("Proveedor",{
        prov_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true,
            unique:true
        },
        prov_rz:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        prov_ruc:{
            type:DataTypes.STRING(11),
            allowNull:false
        }
    },{
        tableName:"t_proveedor",
        timestamps:true
    });
    return modelo;
}