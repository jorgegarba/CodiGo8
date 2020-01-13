import React, { Component } from 'react';

export class Login extends Component {
  render() {
    return (
      <main className="container mt-5">
        <div className="row">
          <div className="col-12">
            <form>
              <div className="form-group">
                <label htmlFor="">Email:</label>
                <input type="text" className="form-control"
                  placeholder="Ingrese su correo" />
              </div>
              <div className="form-group">
                <label htmlFor="">Password:</label>
                <input type="password" className="form-control"
                  placeholder="Ingrese su contraseña" />
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  Iniciar Sesión
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    );
  }
}

export default Login;
