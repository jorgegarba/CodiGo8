from base_de_Datos import bd

class precioCanchaModel(bd.Model):
    __tablename__="t_precioCancha"
    pc_id = bd.Column(bd.Integer, primary_key=True)
    pc_desc = bd.Column(bd.String(45))
    pc_monto = bd.Column(bd.DECIMAL(5,2))
    pc_disponibilidad = bd.Column(bd.Boolean)
    can_id = bd.Column(bd.Integer, bd.ForeignKey('t_canchita.can_id'), nullable=False)
    reservas = bd.relationship('reservaModel',lazy=True,backref='reserva')
    def retornar_json(self):
        return {
            'id':self.tipo_id,
            'descripcion':self.tipo_desc
        }
    def guardar_en_la_bd(self):
        bd.session.add(self)
        bd.session.commit()