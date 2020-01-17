import React, { Component } from 'react';
import Select from 'react-select';
import { withRouter } from 'react-router-dom';
import { RecursoService } from '../../../../servicios/RecursoService';
import { UnidadMedidaService } from '../../../../servicios/UnidadMedidaService';
import { PresupuestoProyectoService } from '../../../../servicios/PresupuestoProyectoService';

class PresupuestoCrear extends Component {

  constructor(props) {
    super(props);

    let { pro_id } = this.props.match.params;

    this.state = {
      formulario: {
        pp_cant: 0,
        pp_puni: 0,
        pp_tot: 0,
        pro_id: pro_id,
        um_id: 0,
        rec_id: 0,
        unidadmedida: '',
        recurso: ''
      },
      recursos: [],
      unidadmedidas: [],
      presupuestos: []
    }
  }

  traerAPIS = () => {
    Promise.all([
      RecursoService.getRecursos(),
      UnidadMedidaService.getUnidadMedidas()
    ]).then(rptas => {
      let recursos = rptas[0].content;
      let unidadmedidas = rptas[1].content;
      recursos = recursos.map(r => ({ ...r, value: r.rec_id, label: r.rec_nom }));
      unidadmedidas = unidadmedidas.map(um => ({ ...um, value: um.um_id, label: um.um_nom }))
      this.setState({
        recursos: recursos,
        unidadmedidas: unidadmedidas
      })
    })
  }

  componentDidMount() {
    this.traerAPIS();
  }

  cambiarFormulario = (e) => {
    this.setState({
      formulario: {
        ...this.state.formulario,
        [e.target.name]: e.target.value
      }
    })
  }

  agregarPresupuesto = (e) => {
    e.preventDefault();
    let objPresupuesto = {
      ...this.state.formulario,
      pp_tot: (+this.state.formulario.pp_cant * +this.state.formulario.pp_puni).toFixed(2),

    };
    this.setState({
      presupuestos: [...this.state.presupuestos, objPresupuesto]
    })
  }


  crearPresupuestos = () => {
    PresupuestoProyectoService
      .postPresupuestos(this.state.presupuestos)
      .then(rpta => {
        console.log(rpta);
      })
  }

  render() {
    return (
      <main className="container-fluid mt-4">
        {/* titulo */}
        <div className="row">
          <div className="col-12">
            <h2 className="display-4 text-center">
              Registrar Prespuesto del Proyecto
            </h2>
          </div>
        </div>
        {/* Formulario */}
        <div className="row mt-3">
          <div className="col-12">
            <div className="card shadow">
              <div className="card-body">
                <form onSubmit={this.agregarPresupuesto}>
                  <div class="row">
                    <div className="col-md-2">
                      <div className="form-group">
                        <label htmlFor="pp_cant">Cantidad:</label>
                        <input type="number" name="pp_cant"
                          id="pp_cant" className="form-control"
                          placeholder="Ingrese cantidad"
                          value={this.state.formulario.pp_cant}
                          onChange={this.cambiarFormulario} />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="form-group">
                        <label htmlFor="pp_puni">P. Unit.:</label>
                        <input type="number" name="pp_puni"
                          id="pp_puni" className="form-control"
                          placeholder="Ingrese P. unit"
                          onChange={this.cambiarFormulario}
                          value={this.state.formulario.pp_puni} />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="form-group">
                        <label htmlFor="pp_tot">Total:</label>
                        <input type="number" name="pp_tot"
                          id="pp_tot" className="form-control"
                          value={
                            (+this.state.formulario.pp_puni *
                              +this.state.formulario.pp_cant).toFixed(2)
                          } disabled />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="form-group">
                        <label htmlFor="">Un. Medida:</label>
                        <Select options={this.state.unidadmedidas}
                          onChange={(e) => {
                            this.setState({
                              formulario: {
                                ...this.state.formulario,
                                um_id: e.um_id,
                                unidadmedida: e.um_nom
                              }
                            });
                          }} />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="form-group">
                        <label htmlFor="">Recurso:</label>
                        <Select options={this.state.recursos}
                          onChange={(e) => {
                            this.setState({
                              formulario: {
                                ...this.state.formulario,
                                rec_id: e.rec_id,
                                recurso: e.rec_nom
                              }
                            });
                          }} />

                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="form-group">
                        <label htmlFor=""></label>
                        <button className="btn btn-block btn-dark"
                          type="submit">
                          <i className="fas fa-plus-square mr-2"></i>
                          Agregar
                      </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* Resultados */}
        <div className="row mt-3">
          <div className="col-12">
            <div className="card shadow">
              <div className="card-body">
                <table className="table table-bordered table-sm">
                  <thead className="thead thead-dark">
                    <tr className="text-center">
                      <th>Cantidad</th>
                      <th>P. Unitario</th>
                      <th>Total</th>
                      <th>Recurso</th>
                      <th>Un. Medida</th>
                    </tr>
                  </thead>
                  <tbody className="text-center">
                    {
                      this.state.presupuestos.map(pre => {
                        return (
                          <tr key={`${pre.um_id}${pre.rec_id}`}>
                            <td>{pre.pp_cant}</td>
                            <td>{pre.pp_puni}</td>
                            <td>{pre.pp_tot}</td>
                            <td>{pre.recurso}</td>
                            <td>{pre.unidadmedida}</td>
                          </tr>
                        )
                      })
                    }
                  </tbody>
                </table>
                <button className="btn btn-block btn-dark"
                  onClick={this.crearPresupuestos}>
                  <i class="fas fa-save mr-2"></i>
                  Crear y guardar presupuestos
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default withRouter(PresupuestoCrear);