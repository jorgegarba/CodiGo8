import { proyecto_model } from './../models/Proyecto';
import { Sequelize } from 'sequelize';

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
