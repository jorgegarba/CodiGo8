import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
// withRouter => es una funcion que sirve para obtner los datos
// de navegación en un componente que no esté dentro del
// 'Switch', OBSERVAR LA ULTIMA LINEA(export)

const Header = (props) => {
  console.log(props);
  let location = props.location.pathname;
  console.log(location);
  
  return (
    location !== "/notfound" ?
      (<header>
        <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
            aria-expanded="false" aria-label="Toggle navigation"></button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" activeClassName="active" exact to="/nosotros">Nosotros</NavLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </header>)
      : null
  );
}

export default withRouter(Header);
