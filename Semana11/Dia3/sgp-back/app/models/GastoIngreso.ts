import {Sequelize, DataTypes} from 'sequelize';
export const gastoingreso_model = (conexion:Sequelize)=>{
    const modelo = conexion.define("GastoIngreso",{
        gasin_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
            unique:true
        },
        gasin_fech:{
            type:DataTypes.DATE,
            allowNull:false
        },
        gasin_crit:{
            type:DataTypes.STRING(20),
            allowNull:false
        }
    },{
        tableName:"t_gastoingreso",
        timestamps:true
    });
    return modelo;

}