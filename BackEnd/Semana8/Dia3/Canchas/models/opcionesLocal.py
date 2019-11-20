from base_de_Datos import bd

class opcionesLocalModel(bd.Model):
    __tablename__="t_opcionesLocal"
    ol_id = bd.Column(bd.Integer, primary_key=True)
    ol_desc = bd.Column(bd.String(45))
    loc_id = bd.Column(bd.Integer, bd.ForeignKey('t_local.loc_id'),nullable=False)
    def retornar_json(self):
        return {
            'id':self.tipo_id,
            'descripcion':self.tipo_desc
        }
    def guardar_en_la_bd(self):
        bd.session.add(self)
        bd.session.commit()