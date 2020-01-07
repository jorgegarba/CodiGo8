import React from 'react';
import Producto from './Producto';

const Productos = (props) => {
  let { productos } = props;

  let contenido = productos.map(prod => {
    return (
      <Producto producto={prod} key={prod.id} />
    )
  });

  // otra forma de crear un arreglo de componentes
  // let contenido2 = [];
  // productos.forEach(element => {
  //   contenido2.push(<Producto producto={element} />)
  // });

  return (
    <div className="row">
      {contenido}
    </div>
  );
}

export default Productos;
