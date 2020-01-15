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
              {/* {
              carga ? carga : <MDBDataTable
                striped
                bordered
                hover
                data={this.state.data} />
            } */}

              {
                carga ? carga : <DataTable
                  title="Arnold Movies"
                  columns={this.state.data.columns}
                  data={this.state.data.rows}
                />
              }
            </div>
          </div>
        </main>
      </Fragment>
    )
  }
}

export default withRouter(Proyectos)
