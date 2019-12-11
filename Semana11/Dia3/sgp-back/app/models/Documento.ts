import {Sequelize, DataTypes} from 'sequelize';

export const documento_model = (conexion:Sequelize)=>{
    const modelo = conexion.define("Documento",{
        doc_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
            unique:true
        },
        doc_tipo:{
            type:DataTypes.STRING(1),
            allowNull:false
        },
        doc_total:{
            type:DataTypes.DECIMAL(10,2),
            allowNull:false
        },
        doc_obs:{
            type:DataTypes.TEXT,
            allowNull:false
        },
        doc_fech:{
            type:DataTypes.DATE,
            allowNull:false
        }
    },{
        tableName:"t_documento",
        timestamps:true
    });
    return modelo;

}