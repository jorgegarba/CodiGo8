from flask_restful import Resource, reqparse
from models.canchita import CanchitaModel

class CanchitaController(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument(
            'tamanio',
            type=str,
            required=True,
            help="Falta tamanio"
        )
        parser.add_argument(
            'foto',
            type=str,
            required=True,
            help="Falta foto"
        ) 
        parser.add_argument(
            'local',
            type=int,
            required=True,
            help="Falta local"
        )
        parser.add_argument(
            'tipo',
            type=int,
            required=True,
            help="Falta tipo"
        )
        data= parser.parse_args()
        canchita = CanchitaModel(data['tamanio'],data['foto'],data['local'],data['tipo'])
        try:
            canchita.guardar_en_la_bd()
        except:
            return {'message':'Hubo un error al registrar la canchita, intente nuevamente'},500
        return {'message':'Canchita guardada con exito','contenido':canchita.retornar_json()},201
    def get(self,name):
        pass

class CanchitasController(Resource):
    def get(self):
        pass