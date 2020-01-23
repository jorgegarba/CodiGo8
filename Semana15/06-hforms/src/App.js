import React, {useState} from 'react'
import Formulario from './Formulario';

export default function App() {
  // let [nombre,setNombre] = useState('')
  // let [error, setError] = useState(false);

  // let handleSubmit = (event) => {
  //   event.preventDefault();
  //   if(nombre.length === 0){
  //     setError(true);
  //   }
  // }

  return (
    <div className="container">
      {/* <h3>Formulario de Registro</h3>
      <form onSubmit={(event)=>{handleSubmit(event)}}>
        <label>Nombre: </label>
        <input 
          type="text" 
          value={nombre} 
          onChange={(event) => {setNombre(event.target.value)}}
          className="form-control"
        />
        {error === true ? "Este campo no puede estar vacio" : null }
        <label>Apellido: </label>
        <input type="text" className="form-control"/>
        <label>DNI: </label>
        <input type="number" className="form-control"/>
        <button type="submit" className="btn btn-primary btn-block mt-3">
          Enviar Datos
        </button>
      </form> */}
      <Formulario />
    </div>
  )
}
