import { URL_BACKEND } from './../environment/environment';
export class AuthService {
  // TODO: Implementar patron de disenio SINGLETON
  token;

  constructor() {
    this.cargarToken();
  }

  async iniciarSesion(correo, password) {

    let misHeaders = new Headers();
    misHeaders.append("content-type", "application/json");
    var config = {
      method: 'POST',
      headers: misHeaders,
      body: JSON.stringify({ correo: correo, password: password })
    };
    let response = await fetch(`${URL_BACKEND}/login`, config);
    let rpta = await response.json();
    return rpta;
  }

  cargarToken() {
    if (localStorage.getItem("token")) {
      this.token = localStorage.getItem("token");
    }
  }

  guardarToken(token) {
    this.token = token;
    localStorage.setItem("token", token);
  }

  /**
   * Retorna true si el existe un token y además, le queda
   * tiempo de vida, caso contrario, FALSE
   */
  isLogged() {
    if (this.token) {
      try {
        // split => devuelve un arreglo de strings separados
        // por el "."
        // en el caso del token, me devuelve un arreglo de 
        // 3 elementos
        let payload = this.token.split(".")[1];
        // decodificando el payload en 'string'
        let payloadDecodificado = window.atob(payload);
        let payloadJSON = JSON.parse(payloadDecodificado);
        if (payloadJSON.exp > new Date() / 1000) {
          return true;
        } else {
          localStorage.removeItem("token");
          return false;
        }
      } catch (error) {
        localStorage.removeItem("token");
        return false;
      }
    } else {
      return false;
    }
  }
  cerrarSesion() {
    localStorage.removeItem("token");
    this.token = null;
  }

}