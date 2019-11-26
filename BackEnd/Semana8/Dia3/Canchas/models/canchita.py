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
    # ESTO NO CREA LA RELACION ( LO QUE CREA LA RELACION ES 
    # EL FOREIGN KEY)
    local = bd.relationship('LocalModel',lazy=True)
    tipos = bd.relationship('TipoModel',lazy=True)
    preciocancha = bd.relationship('precioCanchaModel',lazy=True)

    def __init__(self, tamanio, foto, local,tipo):
        self.can_tam = tamanio
        self.can_foto = foto
        self.loc_id = local
        self.tipo_id = tipo
    def retornar_json(self):
        return {
            'id':self.can_id,
            'tamaño':self.can_tam,
            'foto':self.can_foto,
            'local':self.local.loc_nombre,
            'tipo':self.tipos.tipo_desc
        }
    def guardar_en_la_bd(self):
        bd.session.add(self)
        bd.session.commit()
