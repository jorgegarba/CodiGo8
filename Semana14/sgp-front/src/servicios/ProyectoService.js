import { URL_BACKEND } from './../environment/environment';
import { AuthService } from './Auth';

export class ProyectoService {
  static async getProyectos() {

    let _sAuth = new AuthService();

    let misHeaders = new Headers();
    misHeaders.append("Authorization", `Bearer ${_sAuth.token}`);

    let config = {
      headers: misHeaders,
      method: 'GET'
    }

    let response = await fetch(`${URL_BACKEND}/proyecto`, config);
    let rpta = response.json();
    return rpta;
  }
  static async deletProyectoById(pro_id) {

    let _sAuth = new AuthService();

    let misHeaders = new Headers();
    misHeaders.append("Authorization", `Bearer ${_sAuth.token}`);

    let config = {
      headers: misHeaders,
      method: 'DELETE'
    }

    let response = await fetch(`${URL_BACKEND}/proyecto/${pro_id}`, config);
    let rpta = response.json();
    return rpta;
  }
  static async postProyecto(objProyecto) {
    let _sAuth = new AuthService();
    let misHeaders = new Headers();
    misHeaders.append("Authorization", `Bearer ${_sAuth.token}`);
    misHeaders.append("Content-type", "application/json");
    let config = {
      headers: misHeaders,
      method: 'POST',
      body: JSON.stringify(objProyecto)
    }
    let response = await fetch(`${URL_BACKEND}/proyecto`, config);
    let rpta = response.json();
    return rpta;
  }
  static async getProyectoById(pro_id) {
    let _sAuth = new AuthService();
    let misHeaders = new Headers();
    misHeaders.append("Authorization", `Bearer ${_sAuth.token}`);
    misHeaders.append("Content-type", "application/json");
    let config = {
      headers: misHeaders,
      method: 'GET'
    }
    let response = await fetch(`${URL_BACKEND}/proyecto/${pro_id}`, config);
    let rpta = response.json();
    return rpta;
  }
}