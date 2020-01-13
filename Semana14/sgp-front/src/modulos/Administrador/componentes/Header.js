import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class Header extends Component {
    constructor(props) { super(props); }
    cerrarSesion = () => { this.props.logout(); }

    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark" >
                <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/admin/perfil">Perfil</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/admin">Administrador</NavLink>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" onClick={this.cerrarSesion}>Cerrar Sesión</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        );
    }
}

export default Header;
