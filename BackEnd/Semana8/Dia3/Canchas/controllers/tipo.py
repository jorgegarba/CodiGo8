from flask_restful import Resource, reqparse

from models.tipo import TipoModel
class TipoController(Resource):
    def get(self,nombre):
        # USO DEL LIKE EN SQL-ALCHEMY
        resultado = TipoModel.query.filter(TipoModel.tipo_desc.like('%'+nombre+'%')).all()
        if resultado:
            resultadoFinal = []
            for tipo in resultado:
                resultadoFinal.append(tipo.retornar_json_con_nombre_local())
                # print(tipo.canchitas)
                # for canchita in tipo.canchitas:
                #     print(canchita.local.loc_nombre)
                # print(tipo.canchitas[0].local.loc_nombre)
                # resultadoFinal.append(tipo.retornar_json())
            return resultadoFinal
        else:
            return {'message':'No se encontro ese tipo'},404
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('descripcion',
        type=str,
        required=True,
        help='Falta la descripcion')
        data = parser.parse_args()
        consulta = TipoModel.query.filter_by(tipo_desc=data['descripcion']).first()
        if not consulta:
            insercion = TipoModel(data['descripcion'])
            try:

                insercion.guardar_en_la_bd()
            except:
                return {'message':'Hubo un error al agregar en la base de datos'},500
            return{
                'message':'Se agrego exitosamente el tipo en la base de datos',
                'content':insercion.retornar_json()
                },201
        return{
            'message':'Ya hay un tipo creado con esa descripcion'
        },412