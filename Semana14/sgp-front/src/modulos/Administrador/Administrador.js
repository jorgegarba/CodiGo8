import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import Perfil from "./paginas/Perfil";
import Dashboard from "./paginas/Dashboard";
import Header from "./componentes/Header";
import Footer from "../Footer";

export class Administrador extends Component {
  render() {
    return (
      <Fragment>
        <Header />

        <Switch>
          <Route
            path={"/admin/perfil"}
            render={() => {
              return <Perfil />;
            }}
          />
          <Route
            path={"/admin"}
            render={() => {
              return <Dashboard />;
            }}
          />
        </Switch>
        <Footer />
      </Fragment>
    );
  }
}

export default Administrador;
