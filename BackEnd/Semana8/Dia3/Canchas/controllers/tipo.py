from flask_restful import Resource, reqparse

from models.tipo import TipoModel
class TipoController(Resource):
    def get(self,nombre):
        resultado = TipoModel.query.filter_by(tipo_desc=nombre).first()
        if resultado:
            return resultado.retornar_json(),200
        else:
            return {'message':'No se encontro ese tipo'},404
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('descripcion',
        type=str,
        required=True,
        help='Falta la descripcion')
        data = parser.parse_args()
        insercion = TipoModel(data['descripcion'])
        try:
            insercion.guardar_en_la_bd()
        except:
            return {'message':'Hubo un error al agregar en la base de datos'},500
        return{'message':'Se agrego exitosamente el tipo en la base de datos'},201