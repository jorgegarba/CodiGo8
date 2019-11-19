from flask_restful import Resource, reqparse
from models.categoria import CategoriaModel

class Categoria(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument(
        'categoria',
        type=str,
        required=True,
        help="Falta el nombre de categoria"
    )
    def get(self,nombre):
        categoria = CategoriaModel.query.filter_by(descripcion=nombre).first()
        if categoria:
            return categoria.json(),200
        return {'message':'No se encontro la categoria'},404
    def post(self):
        data = Categoria.parser.parse_args()
        categoria = CategoriaModel(data['categoria'])
        try:
            categoria.guardar_en_bd()
        except:
            return {'message':'Hubo un error al guardar en la base de datos'},500
        return categoria.json()