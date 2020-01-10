import React, { Component, Fragment } from 'react'
// componentes para el enrutamiento
import { Switch, BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import Header from './componentes/Header';
import Home from './paginas/Home';
import Nosotros from './paginas/Nosotros';
import Notfound from './paginas/Notfound';
import Consulta from './paginas/Consulta';
// Para usar una hoja de estilos, se importa el archivo
// directamente
// import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>

        <Header />

        {/* Switch, es el contenedor de todas las rutas*/}
        <Switch>
          {/* Cada ruta es un Componente Route */}
          <Route path={'/'} exact render={() => {
            return (<Home />)
          }} />

          <Route path={'/inicio'} exact render={() => {
            return (<Redirect to="/" />)
          }} />

          <Route path={'/nosotros'} exact component={Nosotros} />
          <Route path={'/notfound'} component={Notfound} />
          <Route path={'/consulta/:texto'} component={Consulta} />

          {/* Ruta de error o notfound */}
          {/* Debe ser la ultima ruta de la lista */}

          <Route render={() => {
            return (<Redirect to="/notfound" />)
          }} />

        </Switch>

      </Router>
    )
  }
}
