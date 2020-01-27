import React from "react";

import ReactEmoji from "react-emoji";

const Message = ({ message: { text, user }, name }) => {
  let usuarioActual = false;

  const nombreSinEspacios = name.trim().toLowerCase();

  if (user === nombreSinEspacios) {
    usuarioActual = true;
  }

  return usuarioActual ? (
    <div className="row">
      <div className="col-6"></div>
      <div className="col-6">
        <small>{nombreSinEspacios}</small>
        <div className="bg-dark p-1">
          <p className="text-white">{ReactEmoji.emojify(text)}</p>
        </div>
      </div>
    </div>
  ) : (
    <div className="row">
      <div className="col-6">
        <div className="bg-secondary">
          <p className="text-dark">{ReactEmoji.emojify(text)}</p>
        </div>
        <small>{user}</small>
      </div>
      <div className="col-6"></div>
    </div>
  );
};

export default Message;
