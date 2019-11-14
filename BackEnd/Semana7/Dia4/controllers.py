from flask_restful import Resource, Api, reqparse
from bd import mysql, app
import bcrypt
api= Api(app)
class Reservas(Resource):
    def get(self):
        cursor = mysql.connection.cursor()
        query = "SELECT * FROM T_RESERVA"
        cursor.execute(query)
        resultado = cursor.fetchall()
        cursor.close()
        return {'Reservas':resultado}

class Usuario(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        # un parser es un filtro para la informacion que nos llega por el body para seleccionar solamente la que necesitamos y la que no, se elimina
        parser.add_argument('correo',
            type=str,
            required=True,
            help='Falta el correo')
        parser.add_argument('password',
            type=str,
            required=True,
            help='Falta la password')
        parser.add_argument('nombre',
            type=str,
            required=True,
            help='Falta el nombre')
        parser.add_argument('apellido',
            type=str,
            required=True,
            help='Falta el apellido')
        parser.add_argument('telefono',
            type=str,
            required=True,
            help='Falta el telefono')
        data = parser.parse_args()
        # ENCRIPTACION DE CONTRASEÑA
        password = bytes(data['password'],'utf-8')
        salt = bcrypt.gensalt(rounds=10)
        hashed = bcrypt.hashpw(password,salt)
        print(salt,hashed)
        saltstr = salt.decode('utf-8')
        hashedstr = hashed.decode('utf-8')
        cur = mysql.connection.cursor()
        cur.execute(f"INSERT INTO T_USUARIO (usu_email, usu_hash, usu_salt, usu_rol, usu_nom, usu_ape, usu_fono) VALUES ('{data['correo']}','{hashedstr}','{saltstr}','Vendedor','{data['nombre']}','{data['apellido']}','{data['telefono']}')")
        mysql.connection.commit()
        cur.close()
        return {'message':'Usuario creado exitosamente'}

class Login(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('correo',
            type=str,
            required=True,
            help='Falta el correo')
        parser.add_argument('password',
            type=str,
            required=True,
            help='Falta la password')
        data = parser.parse_args()
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM T_USUARIO WHERE USU_EMAIL=%s",(data['correo'],))
        respuesta = cur.fetchone()
        cur.close()
        if(respuesta):
            # VALIDAR LA CONTRASEÑA
            password = bytes(data['password'],'utf-8')
            salt = bytes(respuesta[3],'utf-8')
            hashed = bcrypt.hashpw(password,salt)
            hashedstr = hashed.decode('utf-8')
            if hashedstr == respuesta[2]:
                return {'message':'Bienvenido'}, 202
            else:
                return {'message':'Usuario o contraseña incorrectos'},405
        else:
            return {'message':'Usuario o contraseña incorrectos'}, 405


@app.route('/')
def inicio():
    return 'Todo funciona Ok'

api.add_resource(Reservas,'/reservas')
api.add_resource(Usuario,'/usuario/add')
api.add_resource(Login,'/usuario/login')