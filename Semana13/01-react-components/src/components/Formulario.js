import React, { Component } from 'react'
import uuidv1 from 'uuid/v1';

let generarIdRandom = () => {
  return uuidv1();
}

let stateVacio = {
  id: generarIdRandom(),
  nombre: '',
  precio: 0
}

export default class Formulario extends Component {

  constructor(props) {
    super(props);
    this.state = {
      datos: {
        ...stateVacio
      },
      error: false
    };
  }

  handleChange = (e) => {
    this.setState({
      datos: {
        ...this.state.datos,
        [e.target.name]: e.target.value
      }
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let objProducto = { ...this.state.datos };

    // if (objProducto.nombre == "" || objProducto.precio == "0") {
    //   this.setState({
    //     error: true
    //   })
    //   return;
    // }

    this.props.agregarProducto(objProducto);

    this.setState({
      datos: {
        ...stateVacio,
        id: generarIdRandom()
      }
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="id">Id:</label>
          <input type="text" id="id" name="id" className="form-control"
            value={this.state.datos.id} readOnly />
        </div>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input type="text" id="nombre" name="nombre" className="form-control"
            onChange={this.handleChange} value={this.state.datos.nombre} />
        </div>
        <div className="form-group">
          <label htmlFor="precio">Precio:</label>
          <input type="number" id="precio" name="precio" className="form-control"
            onChange={this.handleChange} value={this.state.datos.precio} />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary btn-block">
            Crear Producto
          </button>
        </div>
      </form>
    )
  }
}
