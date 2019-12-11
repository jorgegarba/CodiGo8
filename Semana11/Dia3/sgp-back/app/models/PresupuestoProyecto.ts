import {Sequelize, DataTypes} from 'sequelize';

export const presupuestoproyecto_model = (conexion:Sequelize)=>{
    const modelo = conexion.define("PresupuestoProyecto",{
        pp_id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false,
            unique:true
        },
        pp_cant:{
            type:DataTypes.DECIMAL(10,2),
            allowNull:false
        },
        pp_puni:{
            type:DataTypes.DECIMAL(10,2),
            allowNull:false
        },
        pp_tot:{
            type:DataTypes.DECIMAL(10,2),
            allowNull:false
        }
    },{
        tableName:"t_presupuestoproyecto",
        timestamps:true
    });
    return modelo;
}