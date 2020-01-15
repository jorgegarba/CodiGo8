import React from 'react';

const Cargando = ({ texto }) => {
  return (
    <div className="alert alert-info text-center" role="alert">
      <h4 className="alert-heading">Cargando</h4>
      <p><i className="fas fa-spinner fa-3x fa-spin"></i></p>
      <p>{texto}</p>
    </div>
  );
}

export default Cargando;
