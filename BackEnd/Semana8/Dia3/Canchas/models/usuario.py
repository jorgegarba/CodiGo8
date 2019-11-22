import bcrypt
from base_de_Datos import bd
class UsuarioModel(bd.Model):
    __tablename__="t_usuario"
    usu_id = bd.Column(bd.Integer, primary_key=True)
    usu_nomb = bd.Column(bd.String(45))
    usu_ape = bd.Column(bd.String(45))
    usu_hash = bd.Column(bd.Text)
    usu_salt = bd.Column(bd.Text)
    usu_tipo = bd.Column(bd.String(20))
    usu_fono = bd.Column(bd.String(10))
    usu_mail = bd.Column(bd.Text)

    def __init__(self,nombre,apellido,password,tipo,fono,correo):
        self.usu_nomb=nombre
        self.usu_ape=apellido
        self.usu_tipo=tipo
        self.usu_mail = correo
        # ENCRIPTACION DE LA CONTRASEÑA
        password_convertida= bytes(password,'utf-8')
        salt = bcrypt.gensalt()
        hashed = bcrypt.hashpw(password_convertida,salt)
        salt = salt.decode('utf-8')
        hashed = hashed.decode('utf-8')
        # FIN ENCRIPTACION DE LA CONTRASEÑA
        self.usu_salt=salt
        self.usu_hash=hashed
        self.usu_fono=fono

    def guardar_en_la_bd(self):
        # ESTO SIRVE PARA CREAR UNA SESION EN NUESTRA BD PERO NO GUARDA
        bd.session.add(self)
        # AQUI ES DONDE SE GUARDA EN LA BD
        bd.session.commit()

    def retornar_json(self):
        return {
            'id':self.tipo_id,
            'descripcion':self.tipo_desc
        }

