# pip install flask-restful
from flask import Flask, request
from flask_restful import Resource, Api
app = Flask(__name__)
api = Api(app)
# Resource representa algo que nuestra api va a necesitar
items=[]
class Item(Resource):
    def get(self,nombre):
        for item in items:
            if(item['nombre']==nombre):
                return item, 202
        return {'message':'No se encontro el item'}, 404
    def post(self):
        data = request.get_json()
        itemTemporal = {
            'nombre':data['nombre'],
            'precio':data['precio']
        }
        items.append(itemTemporal)
        return itemTemporal, 201
    def put(self,nombre):
        for item in items:
            if(item['nombre']==nombre):
                data = request.get_json()
                item['precio']=data['precio']
                return {
                    'message':'Producto actualizado',
                    'item':item
                },200
        return {
            'message':'No se encontro el articulo a actualizar'
        },404
    def delete(self,nombre):
        for nro in range(len(items)):
            if(items[nro]['nombre']==nombre):
                print(nro)
                # Para eliminar un valor de una lista se usa:
                # .pop(posicion)
                # .remove(posicion)
                # del lista[posicion]
                items.pop(nro)
                return {
                    'message':'Producto eliminado con exito'
                },200
        return {
            'message':'No se encontro producto a eliminar'
        },404

class HolaMundo(Resource):
    #@app.route('/')
    def get(self):
        # No necesitamos jsonify porque flask_restful automaticamente hace la conversion de tipo de dato
        return {'Hola':'Mundo'}
    def post(self):
        pass

# Con flask_restful ya no se necesita decoradores, solamente se le pasa como un parametro a add_resource
api.add_resource(HolaMundo,'/')
api.add_resource(Item,'/item/<string:nombre>','/item/add')
app.run(debug=True)