import React, { Component, Fragment } from 'react'
import { PresupuestoProyectoService } from '../../../../servicios/PresupuestoProyectoService';
import { withRouter } from 'react-router-dom';
import { UsuarioService } from '../../../../servicios/UsuarioService';
import Select from 'react-select';
import { MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import moment from 'moment';
import Dropzone from 'react-dropzone'
import Swal from 'sweetalert2';
import PrevisualizarImagenes from './componentes/PrevisualizarImagenes';

import jQuery from 'jquery';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};


class IECrear extends Component {

  constructor(props) {

    super(props);
    this.state = {
      archivos: [],
      usuarios: [],
      pps: [],
      cargando: true,
      formularioIE: {
        gasin_crit: 'ingreso',
        gasin_fech: moment().format('YYYY-MM-DD'),
        usu_id: 0
      },
      formularioDoc: {
        doc_tipo: 'deposito',
        doc_total: 0,
        prov_id: 1,
        doc_fech: moment().format('YYYY-MM-DD'),
        doc_obs: ''
      },
      formularioDocDetTmp: {
        docd_cant: 0,
        docd_punit: 0,
        docd_punit_estimado: 0,
        docd_tot: 0,
        docd_obs: '',
        pp_id: 0
      },
      modal: false
    }
  }

  borrarArchivo = nombreArchivo => {
    let archivosState = [...this.state.archivos];
    archivosState = archivosState.filter(file => (file.name !== nombreArchivo));
    this.setState({
      ...this.state,
      archivos: archivosState
    })
  }


  traerAPIS = () => {
    Promise.all([
      PresupuestoProyectoService.getPresupuestosByProId(this.props.match.params.pro_id),
      UsuarioService.getUsuarios()
    ]).then(rptas => {

      let pps = rptas[0].content.map(pp => ({ label: `${pp.unidadmedida.um_nom} | ${pp.recurso.rec_nom}`, value: pp.pp_id, ...pp }));
      let usuarios = rptas[1].content.map(usu => ({ label: usu.usu_nom + ' ' + usu.usu_ape, value: usu.usu_id }));

      this.setState({
        usuarios,
        pps
      });

      console.log(pps);
      console.log(usuarios);

    })
  }

  toggleModalCrearGasto = () => {
    this.setState({
      modal: !this.state.modal
    })
  }

  componentDidMount() {
    this.traerAPIS();
  }

  handChFormularioIE = e => {
    this.setState({
      formularioIE: {
        ...this.state.formularioIE,
        [e.target.name]: e.target.value
      }
    })
  }
  handChFormularioDoc = e => {
    this.setState({
      formularioDoc: {
        ...this.state.formularioDoc,
        [e.target.name]: e.target.value
      }
    })
  }

  handChFormularioDocDetTmpSelect = e => {
    this.setState({
      formularioDocDetTmp: {
        ...this.state.formularioDocDetTmp,
        pp_id: e.value,
        docd_punit_estimado: e.pp_puni
      }
    })
  }

  handChFormularioDocDetTmp = e => {
    this.setState({
      formularioDocDetTmp: {
        ...this.state.formularioDocDetTmp,
        [e.target.name]: e.target.value,
      }
    })
  }

  onDrop = e => {
    console.log(e);
    this.setState({
      ...this.state,
      archivos: [...e]
    })
  }

  guardarTodo = e => {
    Swal.fire({
      title: '¿Seguro que Quieres crear el Ingreso/Gasto?',
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true,
      text: 'Estás a punto de crear un Ingreso/Egreso de dinero y de inventario de productos'
    }).then(rpta => {
      if (rpta.value) {


      }
    })
  }


  render() {
    return (
      <main className="container-fluid mt-4">

        {/* ROW FORMULARIO INGRESO EGRESO */}
        <div className="row">
          <div className="col-12">
            <div className="card shadow">
              <div className="card-body ">
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="gasin_crit">Tipo de Registro</label>
                      <select id="gasin_crit" name="gasin_crit"
                        className="form-control" value={this.state.formularioIE.gasin_crit}
                        onChange={this.handChFormularioIE}>
                        <option value="ingreso">Ingreso</option>
                        <option value="gasto">Gasto</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="gasin_fech">Fecha de Registro</label>
                      <input type="date" id="gasin_fech"
                        name="gasin_fech" className="form-control" onChange={this.handChFormularioIE}
                        value={this.state.formularioIE.gasin_fech} />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="usu_id">Usuario que registra</label>
                      <Select
                        value={this.state.formularioIE.usu_id}
                        options={this.state.usuarios}
                        onChange={(e) => {
                          this.setState({
                            formularioIE: {
                              ...this.state.formularioIE,
                              usu_id: e.value
                            }
                          });
                        }} />
                    </div>
                  </div>
                  <div className="col-md-3 centrar-flex">
                    <i className="fas fa-save fa-3x text-secondary btn-guardar" onClick={this.guardarTodo}></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ROW FORMULARIO DOCUMENTO CABECERA */}
        <div className="row mt-3">
          <div className="col-12">
            <div className="card shadow">
              <div className="card-body ">
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="doc_tipo">Tipo de Documento</label>
                      <select id="doc_tipo" name="doc_tipo"
                        className="form-control" value={this.state.formularioDoc.doc_tipo}
                        onChange={this.handChFormularioDoc}>
                        <option value="deposito">Deposito</option>
                        <option value="efectivo">Efectivo</option>
                        <option value="boleta">Boleta</option>
                        <option value="factura">Factura</option>
                        <option value="notapedido">Nota de Pedido</option>
                        <option value="otro">Otro</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="doc_total">Monto Total</label>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <span className="input-group-text" id="basic-addon1">S.</span>
                        </div>
                        <input type="number" id="doc_total"
                          name="doc_total" className="form-control" placeholder="Ingrese un monto"
                          onChange={this.handChFormularioDoc} value={this.state.formularioDoc.doc_total}
                          disabled={this.state.formularioIE.gasin_crit === 'gasto'} />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="doc_fech">Fecha de Documento</label>
                      <input type="date" id="doc_fech"
                        name="doc_fech" className="form-control"
                        onChange={this.handChFormularioDoc} value={this.state.formularioDoc.doc_fech} />
                    </div>
                  </div>
                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="prov_id">Proveedor (Beta)</label>
                      <input type="text" id="prov_id"
                        name="prov_id" className="form-control" disabled defaultValue={1} />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="doc_obs">Observaciones del Documento</label>
                      <textarea name="doc_obs" id="doc_obs" cols="30" rows="5"
                        className="form-control" placeholder="Ingrese información adicional"
                        onChange={this.handChFormularioDoc} value={this.state.formularioDoc.doc_obs}></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* PREVISUALIZACIONES DE IMAGENES QUE SE SELECCIONAN */}
        <PrevisualizarImagenes archivos={this.state.archivos} borrarArchivo={this.borrarArchivo} />

        {/* ROW DROPZONE, ARRASTRE DE ARCHIVOS */}
        <div className="row mt-3">
          <div className="col-12">
            <div className="card shadow">
              <div className="card-body">
                <Dropzone onDrop={this.onDrop}>
                  {
                    ({ getRootProps, getInputProps }) => (
                      <section style={baseStyle}>
                        <div {...getRootProps()}>
                          <input {...getInputProps()} />
                          <p>Arrastra Elementos en ésta zona o click para seleccionar el archivo</p>
                          <p style={{ textAlign: 'center' }}>
                            <i class="fas fa-images fa-3x fa-shake"></i>
                          </p>
                        </div>
                      </section>
                    )
                  }
                </Dropzone>
              </div>
            </div>
          </div>
        </div>

        {
          this.state.formularioIE.gasin_crit === 'gasto' ?
            <div className="row mt-3" >
              <div className="col-12">
                <div className="card shadow">
                  <div className="card-body ">
                    <div className="row justify-content-center">
                      <button className="btn btn-primary" data-toggle="modal" data-target="#modalRecursoUnidadMedida">
                        <i className="fas fa-plus mr-2"></i> Agregar Detalle de Documento
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div> :
            null
        }



        {/* Modal para agregar ingreso o egreso detalle */}
        <div class="modal fade" id="modalRecursoUnidadMedida" tabIndex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <div className="row mt-3">

                  <div className="col-md-3">
                    <div className="form-group">
                      <label htmlFor="">Recurso y Uni. Medida</label>
                      <Select options={this.state.pps}
                        onChange={this.handChFormularioDocDetTmpSelect}
                        placeholder="-- Seleccione --">
                      </Select>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="form-group">
                      <label htmlFor="docd_cant">Cantidad</label>
                      <input type="number" id="docd_cant"
                        name="docd_cant" className="form-control" placeholder="Ingrese cantidad"
                        value={this.state.formularioDocDetTmp.docd_cant} onChange={this.handChFormularioDocDetTmp} />
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="form-group">
                      <label htmlFor="docd_punit">P. Unitario</label>
                      <input type="number" id="docd_punit"
                        name="docd_punit" className="form-control" placeholder="Ingrese Precio"
                        value={this.state.formularioDocDetTmp.docd_punit} onChange={this.handChFormularioDocDetTmp}
                      />
                    </div>
                  </div>

                  <div className="col-md-2">
                    <div className="form-group">
                      <label htmlFor="docd_punit_estimado">P. Unit. Estimado.</label>
                      <input type="number" id="docd_punit_estimado"
                        name="docd_punit_estimado" className="form-control" disabled value={this.state.formularioDocDetTmp.docd_punit_estimado} />
                    </div>
                  </div>

                  <div className="col-md-2">
                    <div className="form-group">
                      <label htmlFor="docd_tot">Total</label>
                      <input type="number" id="docd_tot"
                        name="docd_tot" className="form-control" value={(+this.state.formularioDocDetTmp.docd_cant * +this.state.formularioDocDetTmp.docd_punit).toFixed(2)}
                        disabled />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <div className="form-group">
                      <label htmlFor="doc_obs">Observaciones del Documento</label>
                      <textarea name="doc_obs" id="doc_obs" cols="30" rows="3"
                        className="form-control" placeholder="Ingrese información adicional"></textarea>
                    </div>
                  </div>
                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </div>
      </main >
    )
  }
}


export default withRouter(IECrear);