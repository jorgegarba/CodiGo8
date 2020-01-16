import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Perfil from "./paginas/Perfil";
import Dashboard from "./paginas/Dashboard";
import Header from "./componentes/Header";
import Footer from "../Footer";
import Proyectos from "./paginas/Proyectos";
import ProyectoCrear from "./paginas/ProyectoCrear";
import ProyectoVer from "./paginas/ProyectoVer";
import PresupuestoCrear from "./paginas/presupuesto/PresupuestoCrear";

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
            path={"/admin/proyecto-ver/:pro_id"}
            render={() => {
              return <ProyectoVer />
            }}
          />
          <Route
            path={"/admin/presupuesto-crear/:pro_id"}
            render={() => {
              return <PresupuestoCrear />
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
