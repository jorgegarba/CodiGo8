import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Administrador from './modulos/Administrador/Administrador';
import Loggin from "./modulos/Loggin/Loggin";
import Invitado from './modulos/invitado/Invitado';
export class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={"/admin"} render={() => {
            return <Administrador />
          }} />
          <Route path={"/loggin"} render={() => {
            return <Loggin />
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
