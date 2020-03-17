import React, { Component, Fragment } from 'react'
import Cargando from '../componentes/Cargando';
import { ProyectoService } from '../../../servicios/ProyectoService';
import { MDBDataTable } from 'mdbreact';
import { withRouter } from 'react-router-dom';
import Swal from 'sweetalert2';
import Currency from 'react-currency-formatter';

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
          { label: 'Id', field: 'pro_id', sort: 'asc' },
          { label: 'Nombre', field: 'pro_nom', sort: 'asc' },
          { label: 'Presupuesto', field: 'pro_pres', sort: 'asc' },
          { label: 'Fecha Inicio', field: 'pro_fechin', sort: 'asc' },
          { label: 'Fecha Fin', field: 'pro_fechfin', sort: 'asc' },
          { label: 'Estado', field: 'pro_est', sort: 'asc' },
          { label: "Acciones", field: 'acciones' },
        ];

        dataNueva.rows = rpta.content.map(p => ({
          ...p,
          pro_pres: <Currency
            symbol={'S./ '}
            quantity={p.pro_pres} />,
          pro_est: p.pro_est === "1" ?
            (<span className="badge badge-success">Activo</span>) :
            (<span className="badge badge-danger">Inactivo</span>),
          acciones:
            <Fragment>
              <button className='btn btn-danger' onClick={() => this.eliminarProyecto(p.pro_id)}>
                <i class="fas fa-trash"></i>
              </button>
              <button className='btn btn-info ml-1' onClick={() => this.goVerProyecto(p.pro_id)}>
                <i class="fas fa-eye    "></i>
              </button>
            </Fragment>
        }))

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
        <main className="container-fluid mt-5">
          <div className="row">
            <div className="card shadow w-100">
              <div className="card-body">
                <div className="col-12">
                  <MDBDataTable
                    striped
                    bordered
                    hover
                    data={this.state.data}
                    responsive
                  />
                </div>
              </div>
            </div>
          </div>
        </main>
      </Fragment >
    )
  }
}

export default withRouter(Proyectos)
