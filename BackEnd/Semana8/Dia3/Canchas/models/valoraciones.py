from base_de_Datos import bd

class valoracionesModel(bd.Model):
    __tablename__="t_valoraciones"
    val_id= bd.Column(bd.Integer, primary_key=True)
    val_comentario= bd.Column(bd.Text)
    val_estrellas= bd.Column(bd.Integer)
    res_id= bd.Column(bd.Integer, bd.ForeignKey('t_reserva.res_id'),nullable=False)