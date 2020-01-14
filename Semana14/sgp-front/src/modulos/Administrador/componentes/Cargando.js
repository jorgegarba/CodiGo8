import React from 'react';

const Cargando = ({ texto }) => {
  return (
    <div class="alert alert-info text-center" role="alert">
      <h4 class="alert-heading">Cargando</h4>
      <p><i class="fas fa-spinner fa-3x fa-spin"></i></p>
      <p>{texto}</p>
    </div>
  );
}

export default Cargando;
