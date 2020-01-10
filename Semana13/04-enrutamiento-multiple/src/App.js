import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Invitado from './modulos/invitado/Invitado';
import Logeado from './modulos/logeado/Logeado';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path={"/logged"}  render={() => {
            return <Logeado />
          }} />
          <Route path={"/"}  render={() => {
            return <Invitado />
          }} />
          <Route render={() => {
            return <Redirect to={"/"} />
          }} />
        </Switch>
      </Router>
    )
  }
}
