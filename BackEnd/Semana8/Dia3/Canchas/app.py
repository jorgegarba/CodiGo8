from flask import Flask
from flask_restful import Api
from base_de_Datos import bd
# from models.local import LocalModel
from controllers.local import LocalController, LocalesController
# from models.canchita import CanchitaModel
from controllers.canchita import CanchitaController, CanchitasController
# from models.tipo import TipoModel
from controllers.tipo import TipoController
# from models.usuario import UsuarioModel
from controllers.usuario import usuarioController
# from models.localOpcionesLocal import localOpcionesLocalModel
from controllers.localOpciones import localOpcionesController
# from models.opcionesLocal import opcionesLocalModel
from controllers.opcionesLocal import opcionesLocalController, opcionesLocalTodosController
# from models.precioCancha import precioCanchaModel
from controllers.precioCancha import precioCanchaController
# from models.reserva import reservaModel
from controllers.reservas import ReservaController
# from models.valoraciones import valoracionesModel
from controllers.valoraciones import valoracionesController, valoracionController
# LIBRERIAS PARA EL JWT
from flask_jwt import JWT
from seguridad import autenticacion, identificador

from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI']="mysql://MoymqThCIH:C6MFl7bxQ6@remotemysql.com/MoymqThCIH"
# ASI SE ALMACENA LA CONTRASEÑA PARA NUESTRO JWT
app.config['SECRET_KEY'] ='clave_secreta'
app.config['JWT_AUTH_URL_RULE']='/usuario/login'
from datetime import timedelta
app.config['JWT_EXPIRATION_DELTA']=timedelta(hours=1)

jsonwebtoken = JWT(app,autenticacion,identificador)
api = Api(app)

@app.route('/')
def inicio():
    return 'La API REST ha escuchado tus suplicas! 😀😱💩'

@app.before_first_request
def iniciar_bd():
    # PARA INICIAR LA APLICACION DE SQL ALCHEMY
    bd.init_app(app)
    # PARA REINICIAR TODA LA BASE DE DATOS (SE VA A PERDER TODA LA INFORMACION)
    # bd.drop_all(app=app)
    # PARA CREAR TODAS LAS TABLAS
    bd.create_all(app=app)

# RUTAS
api.add_resource(TipoController,
'/tipo/buscar/<string:nombre>',
'/tipo/crear')

api.add_resource(CanchitaController,
'/cancha/buscar/<int:id>',
'/cancha/crear')

api.add_resource(LocalController,
'/local/crear',
'/local/buscar/<string:nombre>')

api.add_resource(CanchitasController,'/cancha/traertodos')

api.add_resource(precioCanchaController,
'/precioCancha/crear',
'/precioCancha/buscar/<int:id>',
'/precioCancha/actualizar/<int:id>')

api.add_resource(opcionesLocalController,
'/opciones/buscar/<string:nombre>',
'/opciones/agregar')

api.add_resource(opcionesLocalTodosController,'/opciones/traertodos')
api.add_resource(LocalesController,'/local/traertodos')

api.add_resource(localOpcionesController,'/localopciones/agregar')
api.add_resource(ReservaController,'/reserva/crear')

api.add_resource(usuarioController,'/usuario/crear')

api.add_resource(valoracionesController,'/valoraciones/local/<int:id_local>')
if __name__=="__main__":
    app.run(debug=True)