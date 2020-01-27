import React, { useState, useEffect } from "react";
import queryString from "query-string";
import io from "socket.io-client";

import Messages from "../Messages/Messages";
import InfoBar from "../InfoBar/InfoBar";
import Input from "../Input/Input";

let socket;

const Chat = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const URL_BACK = "localhost:5000";
  useEffect(() => {
    //location.search va a representar las variables que estoy mandando por la URL
    const { name, room } = queryString.parse(window.location.search);

    socket = io(URL_BACK);

    setName(name);
    setRoom(room);

    socket.emit("join", { name: name, room: room }, () => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [URL_BACK, window.location.search]);

  useEffect(() => {
    socket.on(
      "message",
      message => {
        //obtenigo todos los mensajes y le estoy añadiendo un ultimo mensaje

        setMessages([...messages, message]);
      },
      [messages]
    );
  });

  const sendMessage = event => {
    event.preventDefault();

    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  console.log("ultimo mensaje enviado", message);
  console.log("lista de mensajitos", messages);

  return (
    // <input
    //     value={message}
    //     onChange={(event) => setMessage(event.target.value)}
    //     onKeyPress={(event) => event.key === 'Enter' ? sendMessage(event) : null}
    // />
    <div style={{width:"60%",margin:"0 auto"}}>
    
      <InfoBar room={room} />
      <Messages messages={messages} name={name} />
      <Input
        message={message}
        setMessage={setMessage}
        sendMessage={sendMessage}
      />
    
    </div>
  );
};

export default Chat;
