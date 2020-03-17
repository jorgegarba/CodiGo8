import React, { Component } from 'react';
import PrevisualizarImagen from './PrevisualizarImagen';

export class PrevisualizarImagenes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row mt-3">
        <div className="col-12">
          <div className="card shadow">
            <div className="card-body contenedor-imagenes">
              {
                this.props.archivos.map(file => (
                  <PrevisualizarImagen file={file} key={file.name}/>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PrevisualizarImagenes;
