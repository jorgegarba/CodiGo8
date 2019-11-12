from flask import Flask, request
from flask_restful import Api, Resource
from flask_mysqldb import MySQL

app = Flask(__name__)
api = Api(app)
# Conexion MySQL
app.config['MYSQL_HOST']="remotemysql.com"
app.config['MYSQL_USER']="Gg08dIJlvH"
app.config['MYSQL_PASSWORD']="jZWqQUVQaI"
app.config['MYSQL_DB']="Gg08dIJlvH"

mysql = MySQL(app)

class Almacen(Resource):
    def get(self):
        pass
    def post(self):
        pass
    def put(self):
        pass
    def delete(self):
        pass

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
        return {'productos':data}
    def post(self):
        producto = request.get_json()
        cur= mysql.connection.cursor()
        cur.execute("INSERT INTO PRODUCTO (prod_desc,prod_precio,prod_disponible) VALUES ({},{},{})".format(producto['descripcion'],producto['precio'],producto['disponibilidad']))
        mysql.connection.commit()
        return {
            'message':'Producto creado exitosamente',
            'producto':producto
        }
    def put(self):
        pass
    def delete(self):
        pass

api.add_resource(Producto,'/')
# esta condicion se va a ejecutar si nuestro programa esta en la parte principal de nuestro documento 
if(__name__=="__main__"):
    app.run(debug=True)