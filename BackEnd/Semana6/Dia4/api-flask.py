from flask import Flask, request, jsonify

app = Flask(__name__)  # Definimos nuestro proyecto Flask
supermercado = [
    {
        'nombre': 'Super',
        'productos': [
            {
                'nombre': 'Leche Gloria',
                'precio': 4.20
            }
        ]
    }
]

# Por medio de un decorador creamos su funcion que no importa el nombre
@app.route('/')  # http:127.0.0.1:5000/
def inicio():
    return 'Lista de supermercados'

# GET => se usa para solicitar data sin mandar nada por el body
# POST => se usa para mandar informacion al por medio del body
# PUT => se usa para actualizar informacion con contenido en su body
# DELETE => se usa para eliminar informacion

# Agregar un supermercado
@app.route('/tiendas', methods=['POST'])
def crear_market():
    # este metodo automaticante convierte el json en un diccionario
    data = request.get_json()
    print("La data es =>")
    print(data)
    print(data['nombre'])
    nuevo_supermercado = {
        'nombre': data['nombre'],
        'productos': []
    }
    supermercado.append(nuevo_supermercado)
    # devuelve un diccionario convertido en un json para que el cliente lo pueda tratar
    return jsonify(nuevo_supermercado)

# Traer tienda segun su nombre
@app.route('/tiendaXnombre/<string:nombre>', methods=['GET'])
def traer_tienda(nombre):
    # ahi si tienen que coincidir el nombre de la variable en su url con el nombre de la variable del parametro
    for tienda in supermercado:
        if(tienda['nombre'] == nombre):
            return jsonify(tienda), 202
    return f'No se encontro la tienda con el nombre {nombre}', 404

# Traer todos los supermercados con sus productos
@app.route('/tiendas', methods=['GET'])
def traer_tiendas():
    return jsonify({'supermercado': supermercado})

# Agregar un nuevo producto a un supermercado en especifico
@app.route('/tiendas/<string:nombre_tienda>/agregarProducto')
def agregar_producto(nombre_tienda):
    # agregar producto mandado desde el body
    # {'nombre':'Chocolatada', 'precio':4.20}
    for tienda in supermercado:
        if tienda['nombre'] == nombre_tienda:
            dataProducto = request.get_json()
            nuevo_producto = {
                'nombre': dataProducto['nombre'],
                'precio': dataProducto['precio']
            }
            tienda['productos'].append(nuevo_producto)
            return jsonify(tienda), 201
    return jsonify({'message': 'No se encontro esa tienda'}), 404

# Traer todos los productos de una tienda
@app.route('/tiendas/<string:nombre>/item')
def traer_todos_los_productos_por_tienda(nombre):
    for tienda in supermercado:
        if tienda['nombre'] == nombre:
            return jsonify({'Productos': tienda['productos']})
    return jsonify(
        {
            'message': 'No se encontro esa tienda'
        }
    )


app.run(port=5000, debug=True)
