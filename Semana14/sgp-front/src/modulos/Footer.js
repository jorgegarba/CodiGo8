import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div className="card text-center">
        <div className="card-header">Footer</div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            Footer Trabajando
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>
    );
  }
}

export default Footer;
