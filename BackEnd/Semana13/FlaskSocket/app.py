# pip install flask-socketio
# pip install flask-login
from flask import Flask, request
from flask_socketio import SocketIO, send, emit
from flask_login import current_user
from flask_cors import CORS

app = Flask(__name__)
# PARA HABILITAR LOS CORS DE MANERA GLOBAL, para cualquier dominio y que pueda acceder a cualquier metodo
CORS(app)

sockets = SocketIO(app, cors_allowed_origins="*")

mensajes = [
    {
        'id': '001',
        'mensaje': 'Eduardo'
    }
]

# el metodo on sirve para conectar al socket o para hacer una peticion pero este se queda escuchando
@sockets.on('connect')
# el metodo connect sirve para que cuando un nuevo cliente se una al socket el metodo connect se va a quedar abierto escuchando su informacion
def on_join():
    # el sid nos va a dar un numero de identificacion unico de cada cliente, nunca se va a repetir y es un hash
    print("Se conecto el usuario: "+request.sid)
    # El send lo que hace es mandar un mensaje de aviso pero solo a ese cliente que se esta conectando
    send("Se conecto el usuario: "+request.sid)

# el metodo disconnect se va a lanzar automaticamente cuando un cliente deje de estar suscrito al socket
@sockets.on('disconnect')
def se_fue():
    print("Se desconecto el usuario: "+request.sid)
    send("Se desconecto el usuario: " + request.sid)


@sockets.on('pedir-mensajes')
def pedir():
    # a diferencia del send el emit hace un broadcast o un mensaje de difusion a todos los clientes conectados al socket
    emit('lista-mensajes', mensajes)


@sockets.on('agregar-mensaje')
def agregar(mensaje):
    mensajes.append(mensaje)
    print(mensajes)
    emit('lista-mensajes', mensajes)


if __name__ == "__main__":
    sockets.run(app, debug=True, port=3000)
