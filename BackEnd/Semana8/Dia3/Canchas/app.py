from flask import Flask
from flask_restful import Api
from base_de_Datos import bd
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']="mysql://root:root@localhost/canchas"
api = Api(app)

@app.before_first_request
def iniciar_bd():
    # PARA REINICIAR TODA LA BASE DE DATOS (SE VA A PERDER TODA LA INFORMACION)
    # bd.drop_all(app=app)
    # PARA INICIAR LA APLICACION DE SQL ALCHEMY
    bd.init_app(app)
    # PARA CREAR TODAS LAS TABLAS
    bd.create_all(app=app)
if __name__=="__main__":
    app.run(debug=True)