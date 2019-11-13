from flask import Flask, request
from flask_restful import Api, Resource
from flask_mysqldb import MySQL

app = Flask(__name__)
api = Api(app)
# Conexion MySQL
app.config['MYSQL_HOST'] = "remotemysql.com"
app.config['MYSQL_USER'] = "Gg08dIJlvH"
app.config['MYSQL_PASSWORD'] = "jZWqQUVQaI"
app.config['MYSQL_DB'] = "Gg08dIJlvH"

# app.config['MYSQL_HOST']="localhost"
# app.config['MYSQL_USER']="root"
# app.config['MYSQL_PASSWORD']="root"
# app.config['MYSQL_DB']="flaskrestful"


mysql = MySQL(app)

class Producto(Resource):
    def get(self):
        cur = mysql.connection.cursor()
        cur.execute("""
    CREATE TABLE IF NOT EXISTS PRODUCTO(
        prod_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        prod_desc VARCHAR(50),
        prod_precio DOUBLE(5,2),
        prod_disponible boolean
    );
    CREATE TABLE IF NOT EXISTS ALMACEN (
        alma_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        alma_desc VARCHAR(50)
    );
    CREATE TABLE IF NOT EXISTS ALMAPROD(
        almaprod_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        prod_id int,
        alma_id int,
        cant int,
        FOREIGN KEY (prod_id) REFERENCES PRODUCTO(prod_id),
        FOREIGN KEY (alma_id) REFERENCES ALMACEN(alma_id)
    )""")
        cur.close()
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM PRODUCTO")
        data = cur.fetchall()
        cur.close()
        return {'productos': data}

    def post(self):
        producto = request.get_json()
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO PRODUCTO (prod_desc,prod_precio,prod_disponible) VALUES ('{}',{},{})".format(
            producto['descripcion'], producto['precio'], producto['disponibilidad']))
        mysql.connection.commit()
        return {
            'message': 'Producto creado exitosamente',
            'producto': producto
        }

    def put(self, id_prod):
        data = request.get_json()
        cur = mysql.connection.cursor()
        cur.execute(
            f"UPDATE PRODUCTO SET prod_desc = '{data['descripcion']}', prod_precio = {data['precio']} WHERE prod_id={id_prod}")
        mysql.connection.commit()
        cur.close()
        return {
            'message': 'Producto actualizado exitosamente',
            'producto': data
        }

    def delete(self,id_prod):
        cur = mysql.connection.cursor()
        cur.execute(f"UPDATE PRODUCTO SET prod_disponible=false where prod_id = {id_prod}")
        mysql.connection.commit()
        cur.close()
        return {
            'message': 'Producto inhabilitado exitosamente',
        }

api.add_resource(Producto, '/producto', '/producto/<string:id_prod>')
# esta condicion se va a ejecutar si nuestro programa esta en la parte principal de nuestro documento
if(__name__ == "__main__"):
    app.run(debug=True)
