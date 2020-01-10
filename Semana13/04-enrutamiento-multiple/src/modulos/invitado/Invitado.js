import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Nosotros from './paginas/Nosotros';
import Portafolio from './paginas/Portafolio';
import Landing from './paginas/Landing';
import Navbar from './componentes/Navbar';

export class Invitado extends Component {
  render() {
    return (
      <Fragment>
        <header>
          <Navbar />
        </header>
        <Switch>
          <Route path={"/nosotros"}  render={() => {
            return (<Nosotros />)
          }} />
          <Route path={"/portafolio"}  render={() => {
            return (<Portafolio />)
          }} />
          <Route render={() => {
            return <Landing />
          }} />
        </Switch>
      </Fragment>
    );
  }
}

export default Invitado;
