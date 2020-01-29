const express = require('express');
const socketio = require('socket.io');
const http = require('http');

const {addUser, removeUser, getUser, getUsersInRoom} = require('./users');

const PORT = process.env.PORT || 5000;

const router = require('./routes');

const app = express();

app.use(router);

const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('Hay una nueva conexión!!');

    socket.on('join', ({name , room},callback) => {
        console.log(name, room);
        // const error = true;
        // if(error){
        //     callback({error:'Algo ha pasado:('});
        // }
        const {error, user} = addUser({id:socket.id, name, room});
        
        if(error){
            return callback(error);
        }

        socket.emit('message',{user:'Bot-Server',text:`${user.name}, bienvenido a la sala ${user.room}`});

        socket.broadcast.to(user.room).emit('message', {user: 'Bot-Server',text: `${user.name} se ha Unido!!`});

        socket.join(user.room);

        callback();
    });

    socket.on('sendMessage', (message, callback)=>{

        const user = getUser(socket.id);
        
        io.to(user.room).emit('message', {user:user.name, text:message});
        callback();
    });

    socket.on('disconnect',() => {
        console.log('El usuario se ha desconectado');
    });
});

server.listen(PORT, ()=> {
    console.log(`El servidor esta corriendo en el puerto: ${PORT}`)
});