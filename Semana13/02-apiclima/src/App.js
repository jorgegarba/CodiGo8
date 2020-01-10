import React, { Component, Fragment } from 'react'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Clima from './components/Clima';
import uuid from 'uuid/v1';
import moment from 'moment';
import Historial from './components/Historial';
import Usuarios from './components/Usuarios';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      historial: [],
      resultado: {}
    }
    console.log("Constructor de App");

  }

  buscarClima = async (ciudad, pais) => {
    let key = "f216cdc5ffb3839b7ebdb07394220bc1";
    let URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${key}&units=metric`;
    let response = await fetch(URL);
    let rpta = await response.json();

    // tomando historial antiguo
    let historialAntiguo = [...this.state.historial];
    // Creando fecha string
    let fecha = moment().format('YYYY-MM-DD h:mm:ss a');
    // aniadiendo la busqueda reciente
    historialAntiguo.push({
      id: uuid(),
      ciudad: ciudad,
      pais: pais,
      fecha: fecha,
    });

    this.setState({
      resultado: rpta,
      historial: historialAntiguo
    }, () => {
      // localStorage.setItem("historial", JSON.stringify(this.state.historial));
    });
  }

  eliminarHistoria = (id) => {
    let historial = [...this.state.historial];
    historial = historial.filter(h => {
      if (h.id !== id) {
        return h;
      }
    });

    this.setState({
      historial: historial
    }, () => {
      // localStorage.setItem("historial", JSON.stringify(this.state.historial));
    });


  }

  componentDidMount() {
    console.log("ComponentDidMount de App");
    // Cargar datos del Storage en caso de que hubiese un Storage
    let historialStorage = localStorage.getItem("historial");
    if (historialStorage) {
      // actualizr el State con el localstorage
      this.setState({
        historial: JSON.parse(historialStorage)
      })
    }
  }
  componentDidUpdate() {
    // Funcion que se ejecuta toda vez que el state se actualice
    // No se ejecuta la primera vez
    console.log("ComponentDidUpdate de App");
    localStorage.setItem("historial", JSON.stringify(this.state.historial));
  }
  render() {
    console.log("Render de App");

    return (
      <Fragment>
        <Header />
        <h1 className="display-4 my-2 text-center">
          Buscador de Climas
        </h1>
        <main className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <Formulario buscarClima={this.buscarClima} />
                </div>
              </div>
            </div>
          </div>

          <div className="row my-3">
            <div className="col-md-4">
              <div className="card">
                <div className="card-body">
                  <Historial historial={this.state.historial}
                    eliminarHistoria={this.eliminarHistoria} />
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card">
                <div className="card-body">
                  {this.state.resultado.cod ?
                    <Clima resultado={this.state.resultado} /> :
                    <div>Busca una ciudad</div>
                  }

                </div>
              </div>
            </div>
          </div>

          <hr />
          <div className="row">
            <div className="col-12">
              <h2 className="my-2 text-center">Cargando datos desde una API</h2>
              <Usuarios />

            </div>
          </div>
        </main>
      </Fragment>
    )
  }
}
