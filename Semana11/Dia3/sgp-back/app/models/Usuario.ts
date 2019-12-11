import { Sequelize, DataTypes } from 'sequelize';
const crypto = require('crypto');

export const usuario_model = (conexion: Sequelize) => {
    const modelo = conexion.define("Usuario", {
        usu_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true,
            unique: true
        },
        usu_email: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        usu_nom: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        usu_ape: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        usu_tipo: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        usu_hash: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        usu_salt: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    }, {
        tableName: "t_usuario",
        timestamps: true
    });
    modelo.prototype.setSaltAndHash = function (password: any) {
        this.usu_salt = crypto.randomBytes(16).toString('hex');
        this.usu_hash = crypto.pbkdf2Sync(password, this.usu_salt, 1000, 64, 'sha512').toString('hex');
    };
    modelo.prototype.validarPassword = function (password:any) {
        let hash_temporal = crypto.pbkdf2Sync(password, this.usu_salt,1000,64,'sha512').toString('hex');
        if(hash_temporal === this.usu_hash){
            return true
        }else{
            return false
        }
    };


    return modelo;
}