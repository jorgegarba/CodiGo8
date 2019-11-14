from flask import Flask
from flask_mysqldb import MySQL
app = Flask(__name__)
app.config['MYSQL_HOST']='localhost'
app.config['MYSQL_USER']='root'
app.config['MYSQL_PASSWORD']='root'
app.config['MYSQL_DB']='reservas'
mysql = MySQL(app)

# VAMOS A HACER UN SISTEMA DE RESERVA DE AULAS, EN LA CUAL RESERVEMOS EL AULA SELECCIONADA PRIMERO POR SU PABELLON, LUEGO POR EL NUMERO DE AULA
@app.before_first_request
def inicializar_tablas():
    cursor = mysql.connection.cursor()
    crear_tablas= """
    CREATE TABLE IF NOT EXISTS T_PLAYA(
        PLAYA_ID INT NOT NULL PRIMARY KEY,
        PLAYA_NOMBRE VARCHAR(45),
        
    )
    """