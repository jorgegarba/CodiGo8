import React, { Component } from 'react'

export default class AdminNavbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button type="button" id="sidebarCollapse"
            className="btn btn-info" onClick={this.props.toggleAbierto}>
            <i className="fas fa-bars mr-2"></i>
            <span>MENÚ</span>
          </button>
          <h2 className="titulo-modulo">Administración</h2>
        </div>
      </nav>
    )
  }
}
