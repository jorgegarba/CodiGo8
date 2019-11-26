from flask_restful import Resource, reqparse
from flask_jwt import jwt_required
from models.valoraciones import valoracionesModel
from models.local import LocalModel

class valoracionController(Resource):
    @jwt_required()
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument(
            'comentario',
            type=str,
            required=True,
            help="Falta el comentario"

        )
        parser.add_argument(
            'estrellas',
            type=int,
            required=True,
            help="Falta la cantidad de estrellas"
        )
        parser.add_argument(
            'id_reserva',
            type=int,
            required=True,
            help="Falta el id de reserva"
        )
        data = parser.parse_args()
        valoracion = valoracionesModel(data['comentario'],data['estrellas'],data['id_reserva'])
        try:
            valoracion.guardar_en_la_bd()
        except:
            return {
                'message':'Hubo un error al ingresar tu comentario, intentalo nuevamente'},500
        return {
            'message':'Se agrego exitosamente el comentario',
            'content':valoracion.val_id
        },201

class valoracionesController(Resource):
    def get(self,id_local):
        sentencia = LocalModel.query.filter_by(loc_id=id_local).first()
        resultado = []
        promedio = 0
        for cancha in sentencia.canchitas:
            for preciocancha in cancha.preciocancha:
                for reserva in preciocancha.reservas:
                    for valoracion in reserva.valoraciones:
                        promedio += valoracion.val_estrellas
                        resultado.append({
                            'comentario':valoracion.val_comentario,
                            'estrellas':valoracion.val_estrellas
                            })
        return {
            'comentarios':resultado,
            'promedio':promedio/len(resultado)
        }