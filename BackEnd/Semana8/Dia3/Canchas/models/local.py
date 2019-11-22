from base_de_Datos import bd

class LocalModel(bd.Model):
    __tablename__="t_local"
    loc_id = bd.Column(bd.Integer, primary_key=True)
    loc_nombre = bd.Column(bd.String(45))
    loc_lat = bd.Column(bd.DECIMAL(10,8))
    loc_lng = bd.Column(bd.DECIMAL(10,8))
    loc_direccion = bd.Column(bd.String(45))
    loc_fono = bd.Column(bd.String(15))
    usu_id = bd.Column(bd.Integer,bd.ForeignKey('t_usuario.usu_id'),nullable=False)
    canchitas = bd.relationship('CanchitaModel',lazy=True, backref='cancha')
    # parametros para el lazy puede ser 
    # 'select'/True => que va a cargar la data de su hijo
    # 'joined'/False => es como usar un inner join cuando vamos a hacer un select
    # 'subquery' => es igual que joined pero x detras usa una subquery para jalar los datos del hijo
    # 'dynamic' => retorna los objetos del join de la consulta
    def __init__(self,nombre,latitud,longitud,direccion,telefono,id_usu):
        self.loc_nombre=nombre
        self.loc_lat=latitud
        self.loc_lng=longitud
        self.loc_direccion=direccion
        self.loc_fono=telefono
        self.usu_id = id_usu

    def retornar_json(self):
        return {
            'id':self.loc_id,
            'nombre':self.loc_nombre,
            'latitud':str(self.loc_lat),
            'longitud':str(self.loc_lng),
            'direccion':self.loc_direccion,
            'telefono':self.loc_fono
        }
    def guardar_en_la_bd(self):
        bd.session.add(self)
        bd.session.commit()