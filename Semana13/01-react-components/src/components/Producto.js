import React from 'react';

const Producto = (props) => {
  let { producto } = props;

  return (
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">{producto.nombre}</h4>
          <p className="card-text">Precio: S/{producto.precio}</p>
        </div>
      </div>
    </div>
  );
}

export default Producto;
