const URL_BACKEND = "https://backendsgp.herokuapp.com/";
import * as SecureStore from 'expo-secure-store';
import base64 from 'base-64';

export class AuthService {
  // TODO: Implementar patron de disenio SINGLETON
  token;

  constructor() {
    this.cargarToken();
  }

  async iniciarSesion(correo, password) {

    let misHeaders = {
      "content-type": "application/json"
    }

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
    SecureStore.getItemAsync("token").then(token => {
      if (token) {
        this.token = token;
      }
    })
  }

  guardarToken(token) {
    this.token = token;
    SecureStore.setItemAsync("token", token);
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

        let payloadDecodificado = base64.decode(payload);

        let payloadJSON = JSON.parse(payloadDecodificado);
        if (payloadJSON.exp > new Date() / 1000) {
          return true;
        } else {
          console.log("El token ha expirado");
          SecureStore.deleteItemAsync("token");
          return false;
        }
      } catch (error) {
        console.log("El token es falso");
        SecureStore.deleteItemAsync("token");
        return false;
      }
    } else {
      console.log("No hay token el localstorage");
      return false;
    }
  }

  cerrarSesion() {

    SecureStore.deleteItemAsync("token");
    this.token = null;
  }

}