from django.db import models

# Create your models here.

class CategoriaModel(models.Model):
    descripcion = models.CharField(max_length=40)
    estado = models.BooleanField(default= True)

    def __str__(self):
        return '{}'.format(self.descripcion)

    class Meta:
        verbose_name_plural = "Categorias"
        db_table = "tb_categorias"