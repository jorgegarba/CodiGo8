import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './paginas/Dashboard';
import Perfil from './paginas/Perfil';

export class Logeado extends Component {
  render() {
    return (
      <Switch>
        <Route path={"/logged/perfil"} render={() => {
          return <Perfil />
        }} />

        <Route render={() => {
          return <Dashboard />
        }} />
      </Switch>
    );
  }
}

export default Logeado;
