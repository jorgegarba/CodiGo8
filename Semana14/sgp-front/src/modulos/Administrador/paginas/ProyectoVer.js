import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
import { ProyectoService } from '../../../servicios/ProyectoService';
class ProyectoVer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cargando: true,
      proyecto: {}
    }
  }

  traerProyectoById = (pro_id) => {
    ProyectoService.getProyectoById(pro_id)
      .then(rpta => {
        if (rpta.ok) {
          this.setState({
            cargando: false,
            proyecto: rpta.content
          });
        }
      })
  }
  getPreupuestosByProId = (pro_id) => {
    // Aquí llamarán al servicio de PresupuestoProyectoService
    // para traer la lista de presupuestos
  }

  componentDidMount() {
    let { pro_id } = this.props.match.params;
    this.traerProyectoById(pro_id);
    // Aqui llamaran a la funcion getPreupuestosByProId()
  }


  render() {


    return (
      <main className="container-fluid mt-4">
        <div class="row">
          <div className="col-md-4">
            <div className="card shadow">
              <div className="card-body">
                <h4 className="text-center">
                  {this.state.proyecto.pro_nom}
                </h4>
                <hr />
                <table className="table">
                  <tbody>
                    <tr>
                      <th>Presupuesto</th>
                      <td>{this.state.proyecto.pro_pres}</td>
                    </tr>
                    <tr>
                      <th>Fecha de Inicio</th>
                      <td>{this.state.proyecto.pro_fechin}</td>
                    </tr>
                    <tr>
                      <th>Fecha de Fin</th>
                      <td>{this.state.proyecto.pro_fechfin}</td>
                    </tr>
                    <tr>
                      <th>Estado</th>
                      <td>{this.state.proyecto.pro_est}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-md-8">
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-12">
            <div className="card shadow">
              <div className="card-body">
                <nav>
                  <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Ingresos</a>
                    <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Gastos</a>
                    <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Presupuesto</a>
                  </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                  <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">Iran los ingresos</div>
                  <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">Iran los gastos</div>
                  <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                    <div class="row mt-2">
                      <div className="col-12 text-right">
                        <button className="btn btn-dark shadow"
                          onClick={() => {
                            let { pro_id } = this.props.match.params;
                            this.props.history.push(`/admin/presupuesto-crear/${pro_id}`);
                          }}>
                          Crear o agregar presupuesto
                        </button>
                      </div>
                    </div>
                    <div className="row mt-2">
                      <div className="col-12">
                        {/* AQUI LLAMARAN AL COMPONENTE PresupuestoVer */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    )
  }
}

export default withRouter(ProyectoVer)
