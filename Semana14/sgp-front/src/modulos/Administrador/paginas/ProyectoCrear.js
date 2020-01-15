import React, { Component } from 'react'
import { ProyectoService } from '../../../servicios/ProyectoService';
import Swal from 'sweetalert2';

export default class ProyectoCrear extends Component {

  constructor(props) {
    super(props);
    this.state = {
      proyecto: {
        pro_nom: '',
        pro_fechfin: '',
        pro_fechin: '',
        pro_pres: 0,
        pro_est: '1',
      }
    }
  }
  actualizarState = (e) => {
    this.setState({
      proyecto: {
        ...this.state.proyecto,
        [e.target.name]: e.target.value
      }
    })
  }
  submit = e => {
    e.preventDefault();
    Swal.fire({
      icon: 'info',
      title: 'Creando Proyecto',
      text: 'Estamos creando el proyecto...',
      allowOutsideClick: false,
      showConfirmButton: false,
    });
    ProyectoService.postProyecto(this.state.proyecto).then(rpta => {
      if (rpta.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Creado!',
          text: 'El proyecto se ha creado correctamente',
        });
      }
    })
  }

  render() {
    return (
      <main className="container">
        <div className="row justify-content-center mt-4">
          <div className="col-6">
            <form className="card" onSubmit={this.submit}>
              <div className="card-header bg-dark text-light text-center">
                <h5 className="card-title">
                  Formulario de Creación de proyecto
                </h5>
              </div>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="pro_nom">Nombre del Proyecto:</label>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        #
                      </span>
                    </div>
                    <input type="text"
                      name="pro_nom"
                      className="form-control"
                      placeholder="Ingrese Nombre del Proyecto"
                      id="pro_nom"
                      onChange={this.actualizarState}
                      value={this.state.proyecto.pro_nom} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="pro_fechin">Fecha de Inicio del Proyecto:</label>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        #
                      </span>
                    </div>
                    <input type="date"
                      name="pro_fechin"
                      className="form-control"
                      id="pro_fechin"
                      onChange={this.actualizarState}
                      value={this.state.proyecto.pro_fechin} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="pro_fechfin">Fecha de Fin del Proyecto:</label>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        #
                      </span>
                    </div>
                    <input type="date"
                      name="pro_fechfin"
                      className="form-control"
                      id="pro_fechfin"
                      onChange={this.actualizarState}
                      value={this.state.proyecto.pro_fechfin} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="pro_pres">Presupuesto del Proyecto:</label>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        #
                      </span>
                    </div>
                    <input type="number"
                      name="pro_pres"
                      className="form-control"
                      id="pro_pres"
                      placeholder="Ingrese un monto en Soles"
                      onChange={this.actualizarState}
                      value={this.state.proyecto.pro_pres} />
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="pro_est">Estado del Proyecto:</label>
                  <div className="input-group mb-3">
                    <div className="input-group-prepend">
                      <span className="input-group-text" id="basic-addon1">
                        #
                      </span>
                    </div>
                    <select name="pro_est"
                      className="form-control"
                      id="pro_est"
                      onChange={this.actualizarState}
                      value={this.state.proyecto.pro_est}>
                      <option value="1">Activo</option>
                      <option value="0">Inactivo</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <button className="btn btn-block btn-dark"
                    type="submit">
                    <i className="fas fa-plus mr-2"></i>
                    Crear Proyecto
                  </button>
                </div>

              </div>
            </form>
          </div>

        </div>

      </main>
    )
  }
}
