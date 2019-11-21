from base_de_Datos import bd

class localOpcionesLocalModel(bd.Model):
    __tablename__="t_localopc"
    localopc_id = bd.Column(bd.Integer, primary_key=True)

    loc_id = bd.Column(bd.Integer, bd.ForeignKey('t_local.loc_id'),nullable=False)

    ol_id=bd.Column(bd.Integer, bd.ForeignKey('t_opcionesLocal.ol_id'), nullable=False)
    
    def __init__(self,id_local,id_opciones):
        self.loc_id= id_local
        self.ol_id = id_opciones

    def guardar_en_la_bd(self):
        bd.session.add(self)
        bd.session.commit()