import React, { Component } from 'react'

export default class Usuarios extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cargando: true,
      usuarios: []
    }
  }

  cargarUsuarios = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let usuarios = await response.json();

    this.setState({
      cargando: false,
      usuarios: usuarios
    });
  }

  componentDidMount() {
    // Esta funcion del ciclo de vida, nos sirve
    // para hacer una primera carga de datos luego del
    // primer render.
    this.cargarUsuarios();
  }

  render() {

    return (

      this.state.cargando ?
        <div className="alert alert-info text-center" role="alert">
          <h4 className="alert-heading">Cargando</h4>
          <p>Cargando datos del servidor...</p>
          <p className="mb-0"></p>
        </div> :
        <div>
          Aquí se mostraría la lista de usuarios cargados
        </div>


    )
  }
}
