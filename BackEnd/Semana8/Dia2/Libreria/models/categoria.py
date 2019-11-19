from db import db
class CategoriaModel(db.Model):
    __tablename__="t_categoria"
    id = db.Column("cat_id",db.Integer,primary_key=True)
    descripcion = db.Column("cat_desc",db.String(30))
    # RELACIONES
    productos = db.relationship('ProductoModel',lazy='dynamic')
    def __init__(self,desc):
        self.descripcion = desc
    def json(self):
        return {
            'id':self.id,
            'descripcion':self.descripcion
        }
    def guardar_en_bd(self):
        db.session.add(self)
        db.session.commit()
