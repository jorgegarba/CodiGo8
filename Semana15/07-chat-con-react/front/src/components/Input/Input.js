import React from 'react';


const Input = ({ setMessage, sendMessage, message }) => (
  <form className="row">
    <input
      className="form-control col-9"
      type="text"
      placeholder="Escribe un nuevo Mensaje..."
      value={message}
      onChange={({ target: { value } }) => setMessage(value)}
      onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
    />
    <button className="btn btn-primary col-3" onClick={e => sendMessage(e)}>Enviar</button>
  </form>
)

export default Input;