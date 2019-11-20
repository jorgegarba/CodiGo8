from flask import Flask
from flask_restful import Api
from base_de_Datos import bd
from models.local import LocalModel
from models.canchita import CanchitaModel
from models.tipo import TipoModel
from models.usuario import UsuarioModel

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
    bd.drop_all(app=app)
    # PARA CREAR TODAS LAS TABLAS
    bd.create_all(app=app)
if __name__=="__main__":
    app.run(debug=True)