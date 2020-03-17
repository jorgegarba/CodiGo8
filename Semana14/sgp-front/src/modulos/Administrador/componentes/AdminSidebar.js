import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export class AdminSidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    let active = this.props.abierto ? '' : 'active'

    return (
      <nav id="sidebar" className={active}>
        <div className="sidebar-header">
          <h3>Bootstrap Sidebar</h3>
          <strong>BS</strong>
        </div>

        <ul className="list-unstyled components">
          <li className="active">
            <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
              <i className="fas fa-home"></i>
              Mantenimientos
             </a>
            <ul className="collapse list-unstyled" id="homeSubmenu">
              <li>
                <Link to={'/admin/proyectos'}>Proyectos</Link>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-briefcase"></i>
              About
                    </a>
            <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" className="dropdown-toggle">
              <i className="fas fa-copy"></i>
              Pages
                    </a>
            <ul className="collapse list-unstyled" id="pageSubmenu">
              <li>
                <a href="#">Page 1</a>
              </li>
              <li>
                <a href="#">Page 2</a>
              </li>
              <li>
                <a href="#">Page 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-image"></i>
              Portfolio
                    </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-question"></i>
              FAQ
                    </a>
          </li>
          <li>
            <a href="#">
              <i className="fas fa-paper-plane"></i>
              Contact
                    </a>
          </li>
        </ul>

        <ul className="list-unstyled CTAs">
          <li>
            <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" className="download">Download source</a>
          </li>
          <li>
            <a href="https://bootstrapious.com/p/bootstrap-sidebar" className="article">Back to article</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default AdminSidebar;
