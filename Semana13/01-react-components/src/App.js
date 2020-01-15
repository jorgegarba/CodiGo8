import React, { Component, Fragment } from 'react'
import Header from './components/Header';
import Productos from './components/Productos';
import Formulario from './components/Formulario';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      productos: [
        { id: 1, nombre: "Laptop Gamer", precio: 4000.00 },
        { id: 2, nombre: "Laptop Oficina", precio: 2500.00 }
      ]
    }

    console.log("Constructor de App");
    
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
    console.table(this.state.productos);
  }

  componentDidMount() {
    console.log("componentDidMount de App");
  }

  generarProductoAleatorio = () => {
    // Creando un objProducto aleatorio
    let objProducto = {
      id: (Math.random() * (100 - 50) + 50).toFixed(0),
      nombre: "Producto aleatorio",
      precio: (Math.random() * (5000 - 1000) + 1000).toFixed(2),
    };

    // obteniendo una copia el state actual o antiguo
    // OJO> Obligatorio, usar el operador REST(...)
    // para obtener una copia de un arreglo del State
    let productosAntiguos = [...this.state.productos];
    productosAntiguos.push(objProducto);

    // actualizar el state
    this.setState({
      productos: productosAntiguos
    })
  }

  agregarProducto = (objProducto) => {
    this.setState({
      productos: [...this.state.productos, objProducto]
    });
  }

  render() {
    console.log("Render de App");
    let titulo = "Aplicación de Productos";
    let marca = "Codigo - ReactJS";
    // logica o controlador 
    return (
      <Fragment>
        <Header marca={marca} />
        <main className="container fluid mt-4">
          <h1 className="display-4">{titulo}</h1>
          <hr />
          <button className="btn btn-outline-primary"
            onClick={this.generarProductoAleatorio}>
            Generar Producto Aleatorio
          </button>

          <div className="row justify-content-center">
            <div className="col-6 my-3">
              <Formulario agregarProducto={this.agregarProducto} />
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <Productos productos={this.state.productos} />
            </div>
          </div>
        </main>
      </Fragment>
    );

  }
}



// import React, { Fragment } from 'react';
// import './App.css';

// function App() {

//   let titulo = "Aplicación de Productos";
//   let marca = "Codigo - ReactJS";
//   // logica o controlador 

//   return (
//     <Fragment>
//       <Header marca={marca} />

//       <main className="container">
//         <h1>{titulo}</h1>
//       </main>
//     </Fragment>
//   );
// }

// export default App;
