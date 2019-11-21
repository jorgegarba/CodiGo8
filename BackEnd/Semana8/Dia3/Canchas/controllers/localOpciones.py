from flask_restful import Resource, reqparse
from models.localOpcionesLocal import localOpcionesLocalModel

class localOpcionesController(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument(
            'id_local',
            type=int,
            required=True,
            help="Falta el id del local"
        )
        parser.add_argument(
            'id_opciones',
            type=int,
            required=True,
            help="Falta el id de las opciones"
        )
        data = parser.parse_args()
        try:
            localOpcionesLocalModel(data['id_local'],data['id_opciones']).guardar_en_la_bd()
        except:
            return{
                'message':'Hubo un error al vincular el local con sus opciones, intente nuevamente'},500
        return{
            'message':'Se guardo exitosamente las opciones del local'},200