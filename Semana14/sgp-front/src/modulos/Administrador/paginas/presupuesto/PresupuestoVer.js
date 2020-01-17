// Class o Functional Component
// Mostrará una tabla con el presupuesto del proyecto
import React, { Component } from 'react'

export default class PresupuestoVer extends Component {
  render() {
    return (
      <table className="table table-sm table-hover table-striped table-bordered text-center">
        <thead className="thead thead-dark">
          <tr>
            <th>Cantidad</th>
            <th>Recurso</th>
            <th>Un. Medida</th>
            <th>P. Unitario</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.presupuestos.map(pre => {
              return (
                <tr key={pre.pp_id}>
                  <td>{pre.pp_cant}</td>
                  <td>{pre.recurso.rec_nom}</td>
                  <td>{pre.unidadmedida.um_nom}</td>
                  <td>S. {pre.pp_puni}</td>
                  <td>S. {pre.pp_tot}</td>
                </tr>)
            })
          }
        </tbody>
      </table>
    )
  }
}
