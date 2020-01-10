import React, { Fragment } from 'react';

const Clima = (props) => {

  if (props.resultado.cod === "404") {
    return (
      <div className="alert alert-danger">
        No existe resultados para la búsqueda
      </div>
    )
  }

  return (
    <Fragment>
      <h2 className="card-title text-center">
        Temperatura en: <strong>{props.resultado.name}</strong>
      </h2>
      <p className="card-text text-center display-2">
        <span>{props.resultado.main.temp} </span>
        <span>&#8451;</span>
      </p>
      <div className="row">
        <div className="col-md-6">
          <p className="card-text text-center display-4">
            Mínima: <br />{props.resultado.main.temp_min} &#8451;
          </p>
        </div>
        <div className="col-md-6">
          <p className="card-text text-center display-4">
            Máxima: <br />{props.resultado.main.temp_max} &#8451;
          </p>
        </div>
      </div>
    </Fragment>

  );

}

export default Clima;
