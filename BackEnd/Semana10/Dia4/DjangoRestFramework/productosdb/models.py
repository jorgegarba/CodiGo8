from django.db import models

# Create your models here.

class Categoria(models.Model):
    cat_id = models.AutoField(primary_key=True,help_text="Id de la categoria")
    cat_descripcion = models.CharField(max_length=100,help_text="Descripcion de la categoria", unique=True)

    def __str__(self):
        return '{}'.format(self.cat_descripcion)

    class Meta:
        db_table = "t_categoria"
        # cuando estemos en el panel administrativo automaticamente django pone el nombre de las tablas en plural en ingles entonces para nosotros sobreescribir ese nombre en plural 
        verbose_name_plural = "Categorias"

class SubCategoria(models.Model):
    # on_delete => es como se va a comportar nuestra relacion cuando eliminemos la primary key, 3 tipos:
    #CASCADE => el mas comun, si se elimina la pk automaticamente todas sus relaciones tambien se eliminan
    # PROTECT => prohibe la eliminar de la pk porque tiene relaciones existentes, en ese caso primero se elimina todas sus relaciones y recien se puede eliminar su pk
    # SET_NULL => cuando se elimina la pk el campo de la FK queda como NULL
    # DO_NOTHING => esta es la peor de todas porque crea problemas en su integridad de la base de datos al hacer una referencia a una relacion que no existe
    subcat_id = models.AutoField(primary_key=True, unique=True)
    subcat_descripcion = models.CharField(max_length=100,help_text="Descripcion de la sub categoria")
    cat_id = models.ForeignKey(Categoria, on_delete=models.CASCADE)
    def __str__(self):
        return '{} {}'.format(self.cat_id.cat_descripcion, self.subcat_descripcion)
    
    class Meta:
        db_table="t_subcategoria"
        verbose_name_plural="Sub Categorias"
        # indicar que esos campos JUNTOS, solo pueden ser unicos, osea que no se puede repetir esa combinacion
        unique_together = ('cat_id','subcat_descripcion')

class Producto(models.Model):
    prod_id = models.AutoField(primary_key=True)
    prod_desc = models.CharField(max_length=100, help_text="Nombre del producto", unique=True)
    prod_fecha = models.DateTimeField()
    prod_vendido = models.BooleanField(default=False)
    subcat_id = models.ForeignKey(SubCategoria, on_delete=models.CASCADE)

    def __str__(self):
        return '{}'.format(self.prod_desc)

    class Meta:
        db_table = "t_producto"
        verbose_name_plural="Productos"

