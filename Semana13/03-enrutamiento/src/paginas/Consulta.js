import React from 'react';
import { useRouteMatch } from 'react-router-dom';

const Consulta = (props) => {
  console.log(props);

  let { match: { params: { texto } } } = props;
  let match = useRouteMatch();
  console.log(match);

  return (
    <div className="container">
      <h1>Buscaste: {texto}</h1>
    </div>
  );
}

export default Consulta;
