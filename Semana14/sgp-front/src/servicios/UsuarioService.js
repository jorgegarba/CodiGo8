import { URL_BACKEND } from './../environment/environment';
import { AuthService } from './Auth';

export class UsuarioService {
  static async getUsuarios() {
    let _sAuth = new AuthService();
    let misHeaders = new Headers();
    misHeaders.append("Authorization", `Bearer ${_sAuth.token}`);
    let config = {
      headers: misHeaders,
      method: 'GET'
    }
    let response = await fetch(`${URL_BACKEND}/usuario`, config);
    let rpta = response.json();
    return rpta;
  }
}