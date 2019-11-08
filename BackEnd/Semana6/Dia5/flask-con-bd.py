from flask import Flask, jsonify, request
from flask_mysqldb import MySQL

app = Flask(__name__)
# CREDENCIALES DE MYSQL
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'root'
app.config['MYSQL_DB'] = 'apiflask'

# ALTER USER 'username'@'url' IDENTIFIED WITH mysql_native_password BY 'password';

# Creamos una variable de tipo MySQL y le mandamos la configuracion
mysql = MySQL(app)


@app.route('/supermercados/traer')
def traer_supermercados():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM SUPERMERCADOS')
    data = cur.fetchall()
    cur.close()
    print(data)
    return jsonify(data)


@app.route('/supermercado/agregar',methods=['POST'])
def agregar_super():
    info = request.get_json()
    if(info['nombre'] and info['direccion']):
        cur = mysql.connection.cursor()
        cur.execute('INSERT INTO SUPERMERCADOS (nom_super, dir_super) VALUES (%s,%s)',
                    (info['nombre'], info['direccion']))
        resultado = mysql.connection.commit()
        print(resultado)
        cur.close()
        return jsonify(
            {
                'message': 'se agrego con exito', 'content': info
            }),201
    else:
        return jsonify({'message': 'Faltan valores'}), 400

@app.route('/cliente/agregar', methods=['POST'])
def agregar_cliente():
    data = request.get_json()
    if(data.__contains__('nombre') and data.__contains__('apellido') and data.__contains__('categoria')):
        cur = mysql.connection.cursor()
        cur.execute('INSERT INTO CLIENTE (nom_cli, ape_cli, cat_cli) VALUES (%s,%s,%s)',
                    (data['nombre'], data['apellido'],data['categoria']))
        resultado = mysql.connection.commit()
        print(resultado)
        cur.close()
        return jsonify(
            {
                'message': 'se agrego con exito', 'content': data
            }),201
    else:
        return jsonify({'message': 'Faltan valores'}), 400

@app.route('/cliente/traer')
def traer_clientes():
    cur = mysql.connection.cursor()
    cur.execute('SELECT * FROM CLIENTE')
    data = cur.fetchall()
    cur.close()
    print(data)
    return jsonify(data)

#traer un cliente segun su nombre o apellido
@app.route('/cliente/buscar/<string:palabra>')
def buscar_cliente(palabra):
    cur = mysql.connection.cursor()
    cur.execute(f"SELECT * FROM CLIENTE WHERE nom_cli LIKE '%{palabra}%' OR ape_cli LIKE '%{palabra}%'")
    data = cur.fetchall() # fetchall => dame todas las coincidencias 
    # fetchone => dame la primera coincidencia
    cur.close()
    return jsonify(data)

# validar que no se pueda repetir un usuario y un supermercado cuando su direccion sea la misma
# agregar un cliente con un supermercado favorito
@app.route('/clientesuper/agregar', methods=['POST'])
def agregar_cliente_super():
    pass

# traer todos los clientes con un supermercado favorito
@app.route('/supermercado/favorito/<string:nombre>')
def favorito_super():
    pass

# el puerto x defaul de flask es 5000
app.run(debug=True)
