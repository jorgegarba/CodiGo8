import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
export default class Landing extends Component {
  state = {
    nosotros: false
  }
  render() {

    if (this.state.nosotros) {
      return (<Redirect to={"/nosotros"} />)
    }

    return (
      <div>
        Landing

      <button onClick={() => {
          this.setState({ nosotros: true });
        }}>
          ir a Nosotros
      </button>
      </div>
    )
  }
}
