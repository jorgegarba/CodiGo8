from flask_restful import Resource, reqparse
from models.producto import ProductoModel

class Producto(Resource):
    parser = reqparse.RequestParser()
    parser.add_argument(
        'nombre_producto',
        type=str,
        required=True,
        help="Falta el nombre_producto"
    )
    parser.add_argument(
        'categoria',
        type=int,
        required=True,
        help="Falta el codigo de categoria"
    )
    def get(self,nombre):
        # SELECT * FROM PRODUCTO WHERE DESC=NOMBRE
        # QUERY.FETCHONE()
        print(nombre)
        productos = ProductoModel.query.filter_by(desc=nombre).all()
        print(productos)
        if productos:
            rptaProductos=[]
            for producto in productos:
                rptaProductos.append(producto.devolverjson())
            return rptaProductos
        return {'message':'No existe el producto'},404

    def post(self):
        data = Producto.parser.parse_args()
        # print(data)
        producto = ProductoModel(data['nombre_producto'],data['categoria'])
        try:
            producto.guarda_en_la_bd()
        except:
            return {'message':'Hubo un error al guardar en la base de datos'},500
        return {
            'message':'Se guardo el producto exitosamente',
            'producto':data['nombre_producto']
            }