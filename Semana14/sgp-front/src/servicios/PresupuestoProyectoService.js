import { URL_BACKEND } from './../environment/environment';
import { AuthService } from './Auth';

export class PresupuestoProyectoService {
  /**
   * Función que recibe un arreglo de uno o más objetos del 
   * modelo PresupuestoProyecto para insertar en la BD
   * @param {*} presupuestos
   */
  static async postPresupuestos(presupuestos) {
    let _sAuth = new AuthService();
    let misHeaders = new Headers();
    misHeaders.append("Authorization", `Bearer ${_sAuth.token}`);
    misHeaders.append("Content-type", `application/json`);
    let config = {
      headers: misHeaders,
      method: 'POST',
      body: JSON.stringify(presupuestos)
    }
    let response = await fetch(`${URL_BACKEND}/presupuestoproyecto/varios`, config);
    let rpta = response.json();
    return rpta;
  }
}