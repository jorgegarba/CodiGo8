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
        console.log(rpta);
      });
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path={"/admin"} render={() => {
            return <Administrador />
          }} />
          <Route path={"/loggin"} render={() => {
            return <Loggin loggin={this.loggin} />
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
