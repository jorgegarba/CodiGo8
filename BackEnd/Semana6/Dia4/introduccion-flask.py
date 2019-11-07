# pip install flask
from flask import Flask

# __name__ sirve para definir que nuestra aplicacion Flask se va a ejecutar en el hilo principal
app = Flask(__name__)
print(__name__)
# Esto es un decorador de la funcion route y siempre despues de un decorador va una funcion para decir que es lo que va a hacer
@app.route('/')
def inicio():
    return 'Estoy VIVO!'
# para el modo de desarrollo poner debug=True, esto hara que cualquier cambio que la aplicacion se reinicie, x default esta en False
app.run(port=5000, debug=True)