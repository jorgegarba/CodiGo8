import { proyecto_model } from './../models/Proyecto';
import { Sequelize, Model } from 'sequelize';
import { familia_model } from '../models/Familia';
import { proveedor_model } from '../models/Proveedor';
import { usuario_model } from '../models/Usuario';
import { unidadmedida_model } from '../models/UnidadMedida';
import { categoria_model } from '../models/Categoria';
import { documento_model } from '../models/Documento';
import { documentodetalle_model } from '../models/DocumentoDetalle';
import { gastoingreso_model } from '../models/GastoIngreso';
import { imagen_model } from '../models/Imagen';
import { presupuestoproyecto_model } from '../models/PresupuestoProyecto';
import { recurso_model } from '../models/Recurso';

// Crear la conexión colocando ell nombre del schema, usuario y contraseña
// a la base de datos
// además, se configuran parámetros de host, tipo de bd, etc, de diccha
// conexión
export const conexion = new Sequelize('4uDN1ZCLas', '4uDN1ZCLas', 'RYT4PYiSZQ', {
  host: 'remotemysql.com',
  dialect: 'mysql',
  // se imprimirán todas las sentencias SQL cuando se haga una consulta
  // logging: console.log,
  dialectOptions: {
    useUTC: false,
    dateStrings: true,
    typeCast: true
  },
  timezone: '-05:00'
});

export const Categoria = categoria_model(conexion);
export const Documento = documento_model(conexion);
export const DocumentoDetalle = documentodetalle_model(conexion);
export const Familia = familia_model(conexion);
export const GastoIngreso = gastoingreso_model(conexion);
export const Imagen = imagen_model(conexion);
export const PresupuestoProyecto = presupuestoproyecto_model(conexion);
export const Proveedor = proveedor_model(conexion);
export const Proyecto = proyecto_model(conexion);
export const Recurso = recurso_model(conexion);
export const UnidadMedida = unidadmedida_model(conexion);
export const Usuario = usuario_model(conexion);

// DESPUES DE DECLARAR E INICIALIZAR NUESTRAS TABLAS SE HACE LA CREACION DE LAS RELACIONES

Familia.hasMany(Categoria, { foreignKey: "fam_id" }); // Familia tiene uno o muchos Categorias
Categoria.belongsTo(Familia, { foreignKey: "fam_id" }); // Muchas categorias tiene una familia

Categoria.hasMany(Recurso, { foreignKey: "cat_id" });
Recurso.belongsTo(Categoria, { foreignKey: "cat_id" });

Recurso.hasMany(PresupuestoProyecto, { foreignKey: "rec_id" });
PresupuestoProyecto.belongsTo(Recurso, { foreignKey: "rec_id" });

UnidadMedida.hasMany(PresupuestoProyecto, { foreignKey: "um_id" });
PresupuestoProyecto.belongsTo(UnidadMedida, { foreignKey: "um_id" });

Proyecto.hasMany(PresupuestoProyecto, { foreignKey: "pro_id" });
PresupuestoProyecto.belongsTo(Proyecto, { foreignKey: "pro_id" });

PresupuestoProyecto.hasMany(DocumentoDetalle, { foreignKey: "pp_id" });
DocumentoDetalle.belongsTo(PresupuestoProyecto, { foreignKey: "pp_id" });

Usuario.hasMany(GastoIngreso, { foreignKey: "usu_id" });
GastoIngreso.belongsTo(Usuario, { foreignKey: "usu_id" });

Proveedor.hasMany(Documento, { foreignKey: "prov_id" });
Documento.belongsTo(Proveedor, { foreignKey: "prov_id" });

Documento.hasMany(DocumentoDetalle, { foreignKey: "doc_id" });
DocumentoDetalle.belongsTo(Documento, { foreignKey: "doc_id" });

Documento.hasMany(GastoIngreso, { foreignKey: "doc_id" });
GastoIngreso.belongsTo(Documento, { foreignKey: "doc_id" });

Documento.hasMany(Imagen, { foreignKey: "doc_id" });
Imagen.belongsTo(Documento, { foreignKey: "doc_id" });


GastoIngreso.belongsTo(Proyecto, { foreignKey: 'pro_id' });
Proyecto.hasMany(GastoIngreso, { foreignKey: 'pro_id' })
