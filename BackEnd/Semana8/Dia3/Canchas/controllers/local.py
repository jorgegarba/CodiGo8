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
        parser.add_argument(
            'id_usu',
            type=int,
            required=True,
            help="Falta el id de usuario"
        )
        data = parser.parse_args()
        print(data)
        local=LocalModel(data['nombre'],data['latitud'],data['longitud'],data['direccion'],data['telefono'],data['id_usu'])
        try:
            local.guardar_en_la_bd()
        except:
            return {'message':'Hubo un error al registrar el local'},500
        return {
            'message':'Se registro el local',
            'content':local.retornar_json()},201
    def get(self, nombre):
        resultado = LocalModel.query.filter_by(loc_nombre=nombre).all()
        if resultado:
            resultadoFinal=[]
            for item in resultado:
                resultadoFinal.append(item.retornar_json())
            print(resultado)
            return resultadoFinal
        return {'message':'No hay ningun local con ese nombre'},404

class LocalesController(Resource):
    def get(self):
        resultado = LocalModel.query.all()
        if resultado:
            resultadoFinal=[]
            for item in resultado:
                resultadoFinal.append(item.retornar_json())
            print(resultado)
            return resultadoFinal
        return {'message':'No hay ningun local'},404