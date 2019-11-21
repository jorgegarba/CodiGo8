from base_de_Datos import bd
from models.local import LocalModel
class TipoModel(bd.Model):
    __tablename__="t_tipo"
    tipo_id = bd.Column(bd.Integer, primary_key=True)
    tipo_desc = bd.Column(bd.String(45), nullable=True)
    canchitas = bd.relationship('CanchitaModel',lazy=True, backref='t_tipo')
    # es una manera simple de declara una nueva propiedad en la clase CanchitasModel para poder ingresar a sus valores solamente necesitaria canchita.tipo para acceder a todos los valores del tipo

    def __init__(self,descripcion):
        self.tipo_desc=descripcion

    def retornar_json(self):
        return {
            'id':self.tipo_id,
            'descripcion':self.tipo_desc
        }
    def retornar_json_con_nombre_local(self):
        locales=[]
        for canchita in self.canchitas:
            locales.append({
                'nombre':canchita.local.loc_nombre,
                'latitud':str(canchita.local.loc_lat),
                'longitud':str(canchita.local.loc_lng)})

        listanuevalocales =[]
        for local in locales:
            if local not in listanuevalocales:
                listanuevalocales.append(local)
        return {
            'descripcion':self.tipo_desc,
            'locales':listanuevalocales
        }
    def guardar_en_la_bd(self):
        bd.session.add(self)
        bd.session.commit()