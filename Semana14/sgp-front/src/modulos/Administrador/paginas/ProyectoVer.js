import React, { Component } from 'react'
import { withRouter } from 'react-router-dom';
class ProyectoVer extends Component {

  constructor(props) {
    super(props);
    console.log(props);
    
    let { pro_id } = this.props.match.params;
    console.log(pro_id);
  }


  render() {


    return (
      <div>
        Viendo la infomracion de un proyecto
      </div>
    )
  }
}

export default withRouter(ProyectoVer)
