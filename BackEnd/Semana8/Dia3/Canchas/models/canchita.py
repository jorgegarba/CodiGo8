from base_de_Datos import bd


class CanchitaModel(bd.Model):
    __tablename__="t_canchita"
    can_id = bd.Column(bd.Integer, primary_key=True)
    can_tam = bd.Column(bd.String(45))
    can_foto = bd.Column(bd.Text)
    # RELACIONES
    loc_id = bd.Column(bd.Integer, bd.ForeignKey(
        't_local.loc_id'), nullable=False)
    tipo_id = bd.Column(bd.Integer, bd.ForeignKey(
        't_tipo.tipo_id'), nullable=False)

    def __init__(self, tamanio, foto, local,tipo):
        self.can_tam = tamanio
        self.can_foto = foto
        self.loc_id = local
        self.tipo_id = tipo
