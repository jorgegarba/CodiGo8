from flask_restful import Resource, reqparse
from models.local import LocalModel

class LocalController(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument(
            'nombre',
            type=str,
            required=True,
            help="Falta el nombre"
        )
        parser.add_argument(
            'latitud',
            type=float,
            required=True,
            help="Falta la latitud"
        )
        parser.add_argument(
            'longitud',
            type=float,
            required=True,
            help="Falta la longitud"
        )
        parser.add_argument(
            'direccion',
            type=str,
            required=True,
            help="Falta la direccion"
        )
        parser.add_argument(
            'telefono',
            type=str,
            required=True,
            help="Falta el telefono"
        )
        data = parser.parse_args()
        local=LocalModel(data['nombre'],data['latitud'],data['longitud'],data['direccion'],data['telefono'])
        try:
            local.guardar_en_la_bd()
        except:
            return {'message':'Hubo un error al registrar el local'},500
        return {
            'message':'Se registro el local',
            'content':local.retornar_json()},201
