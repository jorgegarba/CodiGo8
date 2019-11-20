from base_de_Datos import bd

class LocalModel(bd.Model):
    __tablename__="t_local"
    loc_id = bd.Column(bd.Integer, primary_key=True)
    loc_nombre = bd.Column(bd.String(45))
    loc_lat = bd.Column(bd.DECIMAL(10,8))
    loc_lng = bd.Column(bd.DECIMAL(10,8))
    loc_direccion = bd.Column(bd.String(45))
    loc_fono = bd.Column(bd.String(15))