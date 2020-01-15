import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Perfil from "./paginas/Perfil";
import Dashboard from "./paginas/Dashboard";
import Header from "./componentes/Header";
import Footer from "../Footer";
import Proyectos from "./paginas/Proyectos";
import ProyectoCrear from "./paginas/ProyectoCrear";

export class Administrador extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Fragment>
        <Header logout={this.props.logout} />

        <Switch>
          <Route
            path={"/admin/perfil"}
            render={() => {
              return (<Perfil />);
            }}
          />
          <Route
            path={"/admin/proyectos"}
            render={() => {
              return <Proyectos />;
            }}
          />
          <Route
            path={"/admin/proyecto-crear"}
            render={() => {
              return <ProyectoCrear />
            }}
          />
          <Route
            render={() => {
              return <Dashboard />;
            }}
          />
        </Switch>
      </Fragment>
    );
  }
}

export default Administrador;
