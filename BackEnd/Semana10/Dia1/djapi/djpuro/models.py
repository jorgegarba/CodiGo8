from django.db import models

# Create your models here.

class CategoriaModel(models.Model):
    # Definimos todos los atributos de nuestra tabla
    # Si no definimos la PK se va a crear automaticamente en nuestra tabla con el nombre id y obviamente va a ser un int, auto_increment, not_null y primary_key
    id_categoria = models.AutoField(auto_created=True, unique=True,primary_key=True,null=False)
    descripcion = models.CharField(max_length=100, unique=True) # varchar(100)
    activo = models.BooleanField(default=True)

    def __str__(self):
        """Para convertir el objeto creado a un string"""
        return '{}'.format(self.descripcion)

    # Ahora si queremos nosotros modificar otros datos (Nombre de la tabla)
    class Meta:
        # cambiar el nombre de la tabla
        db_table = "t_categoria"
        # Cambiar su denominacion en plural
        verbose_name_plural = "Categorias"
