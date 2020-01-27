import React from 'react';

const InfoBar = ({ room }) => (
  <div className="row">
    <div className="col-11">
      
      <h3>{room}</h3>
    </div>
    <div className="col-1 p-1">
      <a href="/">X</a>
    </div>
  </div>
);

export default InfoBar;