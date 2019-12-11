import { proyecto_model } from './../models/Proyecto';
import { Sequelize } from 'sequelize';
import { familia_model } from '../models/Familia';
import { proveedor_model } from '../models/Proveedor';
import { usuario_model } from '../models/Usuario';
import { unidadmedida_model } from '../models/UnidadMedida';
import { categoria_model } from '../models/Categoria';

// Crear la conexión colocando ell nombre del schema, usuario y contraseña
// a la base de datos
// además, se configuran parámetros de host, tipo de bd, etc, de diccha
// conexión
export const conexion = new Sequelize('proyectos', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  // se imprimirán todas las sentencias SQL cuando se haga una consulta
  logging: console.log,
  dialectOptions: {
    useUTC: false,
    dateStrings: true,
    typeCast: true
  }
});

export const Proyecto = proyecto_model(conexion);
export const Familia:any = familia_model(conexion);
export const Proveedor = proveedor_model(conexion);
export const Usuario = usuario_model(conexion);
export const UnidadMedida = unidadmedida_model(conexion);

export const Categoria:any = categoria_model(conexion); 

// DEPUES DE DECLARAR E INICIALIZAR NUESTRAS TABLAS SE HACE LA CREACION DE LAS RELACIONES

Familia.hasMany(Categoria,{foreignKey:"fam_id"}); // Familia tiene uno o muchos Categorias
Categoria.belongsTo(Familia,{foreignKey:"fam_id"}); // Muchas categorias tiene una familia