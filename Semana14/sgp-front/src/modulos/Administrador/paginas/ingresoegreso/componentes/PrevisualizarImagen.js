import React, { Fragment, Component } from 'react';
import { MDBModal, MDBModalBody } from 'mdbreact';

class PrevisualizarImagen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    }
  }
  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Fragment>


        <div className="imagen-prev">
          <div className="botones">
            <span className="boton-lupa" onClick={this.toggle}>
              <i class="fas fa-search    "></i>
            </span>
            <span className="boton-x" onClick={() => {
              this.props.borrarArchivo(this.props.file.name)
            }}>
              <i className="fas fa-trash    "></i>
            </span>
          </div>
          <img src={URL.createObjectURL(this.props.file)} alt="Imagen del documento seleccionado" />
        </div>


        <MDBModal isOpen={this.state.modal} toggle={this.toggle} size="md" >
          <MDBModalBody className="cuerpo-modal">
            <img src={URL.createObjectURL(this.props.file)} alt="Imagen del documento seleccionado"
              className="imagen-modal" />
          </MDBModalBody>
        </MDBModal>

      </Fragment >
    );
  }
}

export default PrevisualizarImagen;

