import { producto_model } from './../modelos/Producto';

import { Sequelize } from 'sequelize';
import { categoria_model } from '../modelos/Categoria';

// Crear la conexión colocando ell nombre del schema, usuario y contraseña
// a la base de datos
// además, se configuran parámetros de host, tipo de bd, etc, de diccha
// conexión
export const conexion = new Sequelize('sockets', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  // se imprimirán todas las sentencias SQL cuando se haga una consulta
  logging: console.log,
  dialectOptions: {
    useUTC: false,
    dateStrings: true,
    typeCast: true
  },
  timezone: '-05:00'
});

export const Producto = producto_model(conexion);
export const Categoria = categoria_model(conexion);

Categoria.hasMany(Producto, { foreignKey: 'cat_id' });
Producto.belongsTo(Categoria, { foreignKey: 'cat_id' })

