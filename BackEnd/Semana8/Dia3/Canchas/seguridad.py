from models.usuario import UsuarioModel
import bcrypt
class Usuario(object):
    def __init__(self, id, username):
        self.id = id
        self.username = username
    def __str__(self):
        return "Usuario(id='%s')" % self.id

def autenticacion(username,password):
    if username and password:
        resultado = UsuarioModel.query.filter_by(usu_mail=username).first()
        if resultado:
            password_convertida = bytes(password,'utf-8')
            salt = bytes(resultado.usu_salt,'utf-8')
            hashed = bcrypt.hashpw(password_convertida,salt)
            hashed = hashed.decode('utf-8')
            if hashed == resultado.usu_hash:
                return Usuario(resultado.usu_id,resultado.usu_mail)
            else:
                print('Contraseña incorrecta')
                return None
        else:
            print('No hay ese usuario')
            return None
    else:
        print('Falta usuario o contraseña')
        return None

def identificador(payload):
    print(payload)
    if ( payload['identity']):
        resultado = UsuarioModel.query.filter_by(usu_id=payload['identity']).first()
        if resultado:
            return (resultado.usu_id, resultado.usu_mail)
        else:
            return None
    else:
        return None