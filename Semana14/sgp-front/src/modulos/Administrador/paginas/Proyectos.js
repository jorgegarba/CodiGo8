import React, { Component, Fragment } from 'react'
import Cargando from '../componentes/Cargando';
import { ProyectoService } from '../../../servicios/ProyectoService';
// import { MDBDataTable } from 'mdbreact';
import { withRouter } from 'react-router-dom';
import DataTable from 'react-data-table-component';
import Swal from 'sweetalert2';

class Proyectos extends Component {

  constructor(props) {
    super(props);
    this.state = {
      proyectos: [],
      cargando: true,
      data: {}
    }
  }

  eliminarProyecto = (pro_id) => {
    Swal.fire({
      title: '¿Seguro que deseas eliminar?',
      text: 'Los datos no podrán recuperarse',
      icon: 'error',
      showCancelButton: true
    }).then(rpta => {
      if (rpta.value) {
        ProyectoService.deletProyectoById(pro_id).then(rpta => {
          if (rpta.ok) {
            this.getProyectos();
          }
        })
      }
    })

  }

  goVerProyecto = (pro_id) => {
    this.props.history.push(`/admin/proyecto-ver/${pro_id}`);
  }

  getProyectos() {
    ProyectoService.getProyectos().then((rpta) => {
      if (rpta.ok) {

        let dataNueva = {};
        dataNueva.columns = [
          { name: 'Id', selector: 'pro_id', sortable: true },
          { name: 'Nombre', selector: 'pro_nom', sortable: true },
          { name: 'Presupuesto', selector: 'pro_pres', sortable: true },
          { name: 'Fecha Inicio', selector: 'pro_fechin', sortable: true },
          { name: 'Fecha Fin', selector: 'pro_fechfin', sortable: true },
          { name: 'Estado', selector: 'pro_est', sortable: true },
          {
            name: "Acciones",
            cell: (proyecto) => {
              return (
                <Fragment>
                  <button className="btn btn-danger" onClick={(e) => {
                    this.eliminarProyecto(proyecto.pro_id);
                  }}>Eliminar</button>

                  <button className="btn btn-info ml-2" onClick={(e) => {
                    this.goVerProyecto(proyecto.pro_id);
                  }}>Ver</button>
                </Fragment>
              )
            },
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
          },
        ];
        dataNueva.rows = [...rpta.content];

        this.setState({
          cargando: false,
          proyectos: rpta.content,
          data: dataNueva
        })
      }
    })
  }

  componentDidMount() {
    this.getProyectos();
  }

  goCrearProyecto = () => {
    this.props.history.push('/admin/proyecto-crear');
  }
  render() {
    let carga;
    if (this.state.cargando) {
      carga = <Cargando texto={"Cargando los proyectos"} />
    }

    return (
      <Fragment>
        <button className="btn btn-dark shadow"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            borderRadius: '50%'
          }} onClick={this.goCrearProyecto}>
          <i className="fas fa-plus fa-2x"></i>
        </button>
        <main className="container mt-5">
          <div className="row">
            <div className="col-12">
              <table className="table table-bordered table-striped table-hover">
                <thead className="thead thead-dark">
                  <tr>
                    <th>
                      <i className="fas fa-hashtag mr-2"></i>
                      <span>Id</span>
                    </th>
                    <th>
                      <i class="fas fa-folder mr-2"></i>
                      <span>Nombre</span>
                    </th>
                    <th>
                      <i class="fas fa-money-bill mr-2 "></i>
                      <span>Presupuesto</span>
                    </th>
                    <th>
                      <i class="fas fa-calendar mr-2"></i>
                      <span>Fecha de Inicio</span>
                    </th>
                    <th>
                      <i class="fas fa-calendar   mr-2 "></i>
                      <span>Fecha de Fin</span>
                    </th>
                    <th>
                      <i class="fas fa-toggle-on   mr-2 "></i>
                      <span>Estado</span>
                    </th>
                    <th>
                      <i class="fas fa-cog mr-2"></i>
                      <span>Acciones</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.proyectos.map(p => {
                      return (
                        <tr>
                          <td>{p.pro_id}</td>
                          <td>{p.pro_nom}</td>
                          <td>{p.pro_pres}</td>
                          <td>{p.pro_fechin}</td>
                          <td>{p.pro_fechfin}</td>
                          <td>
                            {p.pro_est === "1" ? (
                              <span className="badge badge-success">
                                Activo
                              </span>
                            ): (
                              <span className="badge badge-danger">
                                Inactivo
                              </span>
                            )}
                          </td>
                          <td>
                            <button className="btn btn-danger mr-2"
                              onClick={() => {
                                this.eliminarProyecto(p.pro_id)
                              }}>
                              <i class="fas fa-trash"></i>
                            </button>
                            <button className="btn btn-dark"
                              onClick={() => {
                                this.goVerProyecto(p.pro_id);
                              }}>
                              <i class="fas fa-eye    "></i>
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </Fragment >
    )
  }
}

export default withRouter(Proyectos)
