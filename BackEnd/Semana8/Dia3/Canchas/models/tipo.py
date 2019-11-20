from base_de_Datos import bd

class TipoModel(bd.Model):
    __tablename__="t_tipo"
    tipo_id = bd.Column(bd.Integer, primary_key=True)
    tipo_desc = bd.Column(bd.String(45), nullable=True)
    canchitas = bd.relationship('CanchitaModel',lazy=True, backref='tipo')
    # es una manera simple de declara una nueva propiedad en la clase CanchitasModel para poder ingresar a sus valores solamente necesitaria canchita.tipo para acceder a todos los valores del tipo

    def __init__(self,descripcion):
        self.tipo_desc=descripcion

    def retornar_json(self):
        return {
            'id':self.tipo_id,
            'descripcion':self.tipo_desc
        }
    def guardar_en_la_bd(self):
        bd.session.add(self)
        bd.session.commit()