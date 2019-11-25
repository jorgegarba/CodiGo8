from base_de_Datos import bd

class precioCanchaModel(bd.Model):
    __tablename__="t_precioCancha"
    pc_id = bd.Column(bd.Integer, primary_key=True)
    pc_desc = bd.Column(bd.String(45))
    pc_monto = bd.Column(bd.DECIMAL(5,2))
    pc_disponibilidad = bd.Column(bd.Boolean)
    can_id = bd.Column(bd.Integer, bd.ForeignKey('t_canchita.can_id'), nullable=False)
    reservas = bd.relationship('reservaModel',lazy=True,backref='reserva')

    def __init__(self,descripcion,monto, disponibilidad, cancha_id):
        self.pc_desc=descripcion
        self.pc_monto=monto
        self.pc_disponibilidad= disponibilidad
        self.can_id = cancha_id

    def retornar_json(self):
        return {
            'id':self.pc_id,
            'descripcion':self.pc_desc,
            'monto':str(self.pc_monto),
            'id_cancha':self.can_id
        }
    def guardar_en_la_bd(self):
        bd.session.add(self)
        bd.session.commit()

    def actualizar_estado(self,nuevo_estado):
        self.pc_disponibilidad=nuevo_estado
        bd.session.commit()
