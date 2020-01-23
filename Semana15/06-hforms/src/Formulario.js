import React from "react";
import { useForm } from "react-hook-form";

export default function Formulario() {
  let { register, handleSubmit, errors } = useForm();

  let escucharSubmit = data => {
    console.log(data);
  };

  let buscarUsuarios = () => {
      return new Promise ((resolve, reject) => {
          fetch("https://reqres.in/api/users?page=2")
          .then((respuesta) => {
              return respuesta.json();
          }).then(data => {
              resolve(data)
          })
      })
  }

  let validarNombre = async (value) => {
    let data = await buscarUsuarios();
    console.log(data);
    let usuariosFiltrados = data.data.filter(user => 
        user.first_name.indexOf(value) > -1
    )
    console.log("filtro", usuariosFiltrados)

    if(usuariosFiltrados.length === 0){
        return true
    }else{
        return false
    }
  }



  

  let revisarEstado = (value) => {
      console.log(value)
    if (value === "complicado"){
        return false;
    }else{
        return true;
    }
  }

  return (
    <div>
      <h3>Formulario con Hooks</h3>
      <form onSubmit={handleSubmit(escucharSubmit)}>
        {/* los input tendrán que tener si o si el atributo name */}
        <label>Nombre: </label>
        <input
          type="text"
          name="nombre"
          ref={register({ required: true, validate: validarNombre })}
          className="form-control"
        />
        {errors.nombre && (
          <div className="alert alert-danger">Este campo es requerido</div>
        )}
        
        {errors.nombre && 
        errors.nombre.type === "validate" && 
        <p>No Hay</p>}

        <label>Apellido: </label>
        <input
          type="text"
          name="apellido"
          ref={register({ required: true })}
          className="form-control"
        />
        {errors.apellido && <p>El apellido es obligatorio</p>}
        <label>DNI: </label>
        <input
          type="number"
          name="dni"
          ref={register({ required: true, minLength: 8, maxLength: 8 })}
          className="form-control"
        />

        {errors.dni && errors.dni.type === "required" && (
          <p>El DNI es obligatorio</p>
        )}

        {errors.dni &&
          errors.dni &&
          errors.dni.type === "minLength" && (
            <p>El DNI tiene que tener min 8 dígitos</p>
          )}

        {errors.dni &&
          errors.dni &&
          errors.dni.type === "maxLength" && (
            <p>El DNI tiene que tener max 8 dígitos</p>
          )}
        <label>Estado Civil: </label>
        <select name="estadocivil" className="form-control" ref={(register({validate: revisarEstado}))}>
            <option value="">Escoja una opcion</option>
            <option value="casado">casado</option>
            <option value="soltero">soltero</option>
            <option value="complicado">complicado</option>
        </select>

        {errors.estadocivil && 
        errors.estadocivil.type === "validate" && 
        <p>Quierete amigo!</p> }

        <button type="submit" className="btn btn-primary btn-block mt-3">
          Enviar Datos
        </button>
      </form>
    </div>
  );
}
