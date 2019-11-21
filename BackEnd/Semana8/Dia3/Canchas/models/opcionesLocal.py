from base_de_Datos import bd

class opcionesLocalModel(bd.Model):
    __tablename__="t_opcionesLocal"
    ol_id = bd.Column(bd.Integer, primary_key=True)
    ol_desc = bd.Column(bd.String(45))

    def __init__(self,descripcion):
        self.ol_desc = descripcion

    def retornar_json(self):
        return {
            'id':self.ol_id,
            'descripcion':self.ol_desc
        }
    def guardar_en_la_bd(self):
        bd.session.add(self)
        bd.session.commit()