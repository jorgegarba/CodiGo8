import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from './paginas/Register';
import Recuperar from './paginas/Recuperar';
import Login from './paginas/Login';
import Footer from '../Footer';

export class Loggin extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <Fragment>
        <Switch>
          <Route path={"/loggin/registrar"} render={() => {
            return <Register />
          }} />
          <Route path={"/loggin/recuperarpassword"} render={() => {
            return <Recuperar />
          }} />
          <Route render={() => {
            return <Login loggin={this.props.loggin} />
          }} />
        </Switch>
      </Fragment>
    );
  }
}

export default Loggin;
