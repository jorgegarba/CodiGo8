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
from models.precioCancha import precioCanchaModel
from models.reserva import reservaModel
from models.valoraciones import valoracionesModel

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']="mysql://root:root@localhost/canchas"
api = Api(app)

@app.route('/')
def inicio():
    return 'La API REST ha escuchado tus suplicas! 😀'

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
api.add_resource(opcionesLocalController,
'/opciones/buscar/<string:nombre>',
'/opciones/agregar')

api.add_resource(opcionesLocalTodosController,'/opciones/traertodos')
api.add_resource(LocalesController,'/local/traertodos')

api.add_resource(localOpcionesController,'/localopciones/agregar')

api.add_resource(usuarioController,'/usuario/crear')
if __name__=="__main__":
    app.run(debug=True)