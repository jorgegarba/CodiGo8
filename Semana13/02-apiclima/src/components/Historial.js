import React from 'react';

const Historial = (props) => {


  return (
    <ul className="list-group">
      {
        props.historial.map(h => {
          return (
            <li className="list-group-item" key={h.id}>
              Ciudad: <strong>{h.ciudad}</strong> <br />
              Pais: <strong>{h.pais}</strong> <br />
              Fecha de búsqueda:<strong>{h.fecha}</strong>
              <button onClick={() => {
                props.eliminarHistoria(h.id);
              }}>
                Eliminar
              </button>
            </li>
          )
        })
      }
    </ul>
  );
}

export default Historial;
