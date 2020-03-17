import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Perfil from "./paginas/Perfil";
import Dashboard from "./paginas/Dashboard";
import Proyectos from "./paginas/Proyectos";
import ProyectoCrear from "./paginas/ProyectoCrear";
import ProyectoVer from "./paginas/ProyectoVer";
import PresupuestoCrear from "./paginas/presupuesto/PresupuestoCrear";
import AdminSidebar from "./componentes/AdminSidebar";

import './assets/AdminEstilos.css';
import AdminNavbar from "./componentes/AdminNavbar";
import IECrear from "./paginas/ingresoegreso/IECrear";

export class Administrador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      abierto: false
    }
  }
  // funcion para cambiar el comportamiento del sidebar
  toggleAbierto = () => {
    this.setState({
      abierto: !this.state.abierto
    })
  }

  render() {
    return (
      <div className="wrapper">
        {/* <Header logout={this.props.logout} /> */}
        <AdminSidebar abierto={this.state.abierto} />
        <div id="content" style={{ backgroundColor: '#F6F4FE' }}>
          <AdminNavbar toggleAbierto={this.toggleAbierto} />
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
              path={"/admin/ie-crear/:pro_id"}
              render={() => {
                return <IECrear />
              }}
            />
            <Route
              path={"/admin/presupuesto-crear/:pro_id"}
              render={() => {
                return <PresupuestoCrear />
              }}
            />
            <Route path={'/'}
              render={() => {
                return <Dashboard toggleAbierto={this.toggleAbierto} />;
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Administrador;
