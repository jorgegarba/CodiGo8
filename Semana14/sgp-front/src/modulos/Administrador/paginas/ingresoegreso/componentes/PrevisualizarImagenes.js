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
                this.props.archivos.length === 0 ?

                  <p>
                    <i class="fas fa-frown "></i>
                    &nbsp; No has seleccionado ningún archivo de imagen
                  </p>

                  :
                  this.props.archivos.map(file => (
                    <PrevisualizarImagen file={file} key={file.name} borrarArchivo={this.props.borrarArchivo} />
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
