import React from 'react';

const Consulta = (props) => {
  let { match: { params: { texto } } } = props;

  return (
    <div className="container">
      <h1>Buscaste: {texto}</h1>
    </div>
  );
}

export default Consulta;
