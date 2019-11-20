from base_de_Datos import bd

class TipoModel(bd.Model):
    __tablename__="t_tipo"
    tipo_id = bd.Column(bd.Integer, primary_key=True)
    tipo_desc = bd.Column(bd.String(45), nullable=True)

    def __init__(self,descripcion):
        self.tipo_desc=descripcion