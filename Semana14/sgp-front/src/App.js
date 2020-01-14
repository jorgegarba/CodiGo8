import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Administrador from './modulos/Administrador/Administrador';
import Loggin from "./modulos/Loggin/Loggin";
import Invitado from './modulos/invitado/Invitado';
import { AuthService } from './servicios/Auth';

export class App extends Component {

  _sAuth = new AuthService();

  constructor(props) {
    super(props);
    this.state = {
      isLogged: false,
    }
  }

  loggin = (objeto) => {
    console.log(objeto);
    this._sAuth.iniciarSesion(objeto.correo, objeto.password)
      .then((rpta) => {
        // Cuando la respuesta del servidor tras iniciar sesion es correcta.
        // guardamos el token en el localstorage
        if (rpta.ok) {
          this._sAuth.guardarToken(rpta.token);
          // Además, guardamos el state para indicar isLogged=true
          this.setState({
            isLogged: true
          });
        }
      });
  }

  componentDidMount() {
    // Una vez que el componente termina de cargar,
    // verificamos que el token se encuentre en el localstorage
    // y que a su vez, tenga tiempo de vida
    if (this._sAuth.isLogged()) {
      this.setState({
        isLogged: true
      });
    }
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  logout = () => {
    this._sAuth.cerrarSesion();
    this.setState({
      isLogged: false
    })
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path={"/admin"} render={() => {
            // colocar logica para autorizar la ruta Adminstrador
            if (this._sAuth.isLogged()) {
              return <Administrador logout={this.logout} />
            } else {
              this.setState({
                isLogged: false
              });
              return <Redirect to={'/loggin'} />
            }
          }} />
          <Route path={"/loggin"} render={() => {
            // Si isLogged está en true, significa que el state
            // acaba de actualizar su valor y que la petición a /loggin
            // ya es en vano, es decir, si alguien pide /loggin,
            // deberia automaticamente, redireccionar a /admin
            if (this._sAuth.isLogged()) {
              return <Redirect to={'/admin'} />
            } else {
              return <Loggin loggin={this.loggin} />
            }
          }} />
          <Route path={"/"} render={() => {
            return <Invitado />
          }} />
          <Route render={() => {
            return <Redirect to={"/"} />
          }} />
        </Switch>
      </Router>
    );
  }
}

export default App;
