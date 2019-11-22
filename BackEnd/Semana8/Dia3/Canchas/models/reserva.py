from base_de_Datos import bd

class reservaModel(bd.Model):
    __tablename__="t_reserva"
    res_id= bd.Column(bd.Integer, primary_key=True)
    res_fechin= bd.Column(bd.DateTime)
    res_fechfin= bd.Column(bd.DateTime)
    res_monto= bd.Column(bd.DECIMAL(5,2))
    res_adelanto= bd.Column(bd.DECIMAL(5,2))
    usu_id= bd.Column(bd.Integer,bd.ForeignKey('t_usuario.usu_id'))
    pc_id= bd.Column(bd.Integer,bd.ForeignKey('t_precioCancha.pc_id'))

    valoraciones = bd.relationship('valoracionesModel',backref='valoraciones',lazy=True)

    def __init__(self,fecha_inicio,fecha_fin,monto,adelanto,id_usu,id_precio):
        self.res_fechin=fecha_inicio
        self.res_fechfin=fecha_fin
        self.res_monto=monto
        self.res_adelanto=adelanto
        self.usu_id=id_usu
        self.pc_id=id_precio

    def retornar_json(self):
        return {
            'id':self.tipo_id,
            'descripcion':{
                'fecha inicio': self.res_fechin,
                'fecha fin': self.res_fechfin
            }
        }
    def guardar_en_la_bd(self):
        bd.session.add(self)
        bd.session.commit()