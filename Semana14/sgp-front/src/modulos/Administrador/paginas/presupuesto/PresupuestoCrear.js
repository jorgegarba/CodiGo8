import React, { Component } from 'react';
import Select from 'react-select';

class PresupuestoCrear extends Component {
  render() {
    return (
      <main className="container-fluid mt-4">
        <div className="row">
          <div className="col-12">
            <h2 className="display-4 text-center">
              Registrar Prespuesto del Proyecto
            </h2>
          </div>
        </div>
        <div class="row mt-3">
          <div className="col-12">
            <div className="card shadow">
              <div className="card-body">
                <form>
                  <div class="row">
                    <div className="col-md-2">
                      <div className="form-group">
                        <label htmlFor="pp_cant">Cantidad:</label>
                        <input type="number" name="pp_cant"
                          id="pp_cant" className="form-control"
                          placeholder="Ingrese cantidad" />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="form-group">
                        <label htmlFor="pp_puni">P. Unit.:</label>
                        <input type="number" name="pp_puni"
                          id="pp_puni" className="form-control"
                          placeholder="Ingrese P. unit" />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="form-group">
                        <label htmlFor="pp_tot">Total:</label>
                        <input type="number" name="pp_tot"
                          id="pp_tot" className="form-control"
                          defaultValue={30} disabled />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="form-group">
                        <label htmlFor="">Un. Medida:</label>
                        <Select options={[
                          { value: '1', label: 'Bolsa' },
                          { value: '2', label: 'Horas Hombre' },
                          { value: '3', label: 'Kilogramos' },
                        ]} />
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className="form-group">
                        <label htmlFor="">Recurso:</label>
                        <Select options={[
                          { value: '1', label: 'Cemento' },
                          { value: '2', label: 'Varilla de 5/8 \'\'' },
                          { value: '3', label: 'Varilla de 1/2 \'\'' },
                        ]} />

                      </div>
                    </div>
                    <div className="col-md-2">

                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default PresupuestoCrear;