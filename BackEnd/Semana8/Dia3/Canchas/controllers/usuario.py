from flask_restful import Resource, reqparse
from models.usuario import UsuarioModel

class usuarioController(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument(
            'correo',
            type=str,
            required=True,
            help="Falta el correo"
        )
        parser.add_argument(
            'nombre',
            type=str,
            required=True,
            help="Falta el nombre"
        )
        parser.add_argument(
            'apellidos',
            type=str,
            required=True,
            help="Falta el apellido"
        )
        parser.add_argument(
            'pass',
            type=str,
            required=True,
            help="Falta la contraseña"
        )
        parser.add_argument(
            'tipo',
            type=str,
            required=True,
            help="Falta el tipo"
        )
        parser.add_argument(
            'dni',
            type=str,
            required=True,
            help="Falta el dni"
        )