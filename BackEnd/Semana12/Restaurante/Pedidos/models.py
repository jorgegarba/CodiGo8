from django.db import models

# Create your models here.


class Usuario(models.Model):
    # Si no definimos una primary key se crea automaticamente con el nombre id
    usu_id = models.AutoField(primary_key=True, unique=True)
    usu_nom = models.CharField(max_length=45, blank=False, help_text='Aqui va el nombre completo del usuario')
    # help_text sirve para darnos un mensaje de ayuda al momento de ingresar nuestro dato, obviamente tiene que ser NOT NULL (blank=False) para que nos lo muestre
    usu_hash=models.TextField()
    usu_salt=models.TextField()
    usu_tipo=models.IntegerField()
    usu_email=models.EmailField(max_length=45, unique=True)
    usu_fono=models.CharField(max_length=20)
    # Para los timestamps se necesita crear manualmente, y la propiedad auto_now_add significa que se va rellenar automaticamente y auto_now significa que va a agarrar la fecha y hora actual y la va a modificar
    createdAt=models.DateTimeField(auto_now_add=True)
    updatedAt=models.DateTimeField(auto_now=True)

    def json(self):
        return {
            'id':self.usu_id,
            'nombre':self.usu_nom,
            'fono':self.usu_fono,
            'correo':self.usu_email
        }

    class Meta:
        db_table="t_usuario"
        verbose_name_plural="Usuarios"
        ordering=['usu_nom']


class Mesa (models.Model):
    mesa_id=models.AutoField(primary_key=True)
    mesa_nro=models.IntegerField()
    mesa_est=models.BooleanField(default=True)
    mesa_cant=models.IntegerField()
    createdAt=models.DateTimeField(auto_now_add=True)
    updatedAt=models.DateTimeField(auto_now=True)

    class Meta:
        db_table="t_mesa"
        verbose_name_plural="Mesas"


class Reserva(models.Model):
    res_id=models.AutoField(primary_key=True)
    res_fecha=models.DateTimeField()
    res_dni=models.CharField(max_length=10)
    res_est=models.BooleanField()
    usu_id=models.ForeignKey(Usuario, on_delete=models.CASCADE)
    mesa_id=models.ForeignKey(Mesa, on_delete=models.CASCADE)
    createdAt=models.DateTimeField(auto_now_add=True)
    updatedAt=models.DateTimeField(auto_now=True)

    class Meta:
        db_table="t_reserva"
        verbose_name_plural="Reservas"


class Asignacion(models.Model):
    asig_id=models.AutoField(primary_key=True)
    usu_id=models.ForeignKey(Usuario, on_delete=models.CASCADE)
    mesa_id=models.ForeignKey(Mesa, on_delete=models.CASCADE)
    createdAt=models.DateTimeField(auto_now_add=True)
    updatedAt=models.DateTimeField(auto_now=True)

    class Meta:
        db_table="t_asignacion"
        verbose_name_plural="Asignaciones"


class Tipo(models.Model):
    tipo_id=models.AutoField(primary_key=True)
    tipo_desc=models.CharField(max_length=45)
    createdAt=models.DateTimeField(auto_now_add=True)
    updatedAt=models.DateTimeField(auto_now=True)

    class Meta:
        db_table="t_tipo"
        verbose_name_plural="Tipos"

class Cabecera_documento(models.Model):
    cd_id=models.AutoField(primary_key=True)
    cd_fecha=models.DateTimeField(auto_now=True)
    cd_nomCli=models.CharField(max_length=45)
    cd_dniCli=models.CharField(max_length=15)
    createdAt=models.DateTimeField(auto_now_add=True)
    updatedAt=models.DateTimeField(auto_now=True)

    class Meta:
        db_table="t_cabeceraDocumento"
        verbose_name_plural="Cabera de Documentos"


class Producto(models.Model):
    prod_id=models.AutoField(primary_key=True)
    prod_nom=models.CharField(max_length=50)
    prod_desc=models.TextField()
    prod_img=models.TextField()
    prod_disp=models.BooleanField(default=True)
    tipo_id=models.ForeignKey(Tipo, on_delete=models.CASCADE)
    createdAt=models.DateTimeField(auto_now_add=True)
    updatedAt=models.DateTimeField(auto_now=True)
    class Meta:
        db_table="t_producto"
        verbose_name_plural="Productos"


class Precio(models.Model):
    precio_id=models.AutoField(primary_key=True)
    precio_inicio=models.DateTimeField()
    precio_fin=models.DateTimeField()
    precio_monto=models.DecimalField(decimal_places=2, max_digits=5)
    prod_id = models.ForeignKey(Producto, on_delete=models.CASCADE)
    createdAt=models.DateTimeField(auto_now_add=True)
    updatedAt=models.DateTimeField(auto_now=True)
    class Meta:
        db_table="t_precio"
        verbose_name_plural="Precios"

class Detalle_documento(models.Model):
    dd_id = models.AutoField(primary_key=True)
    dd_cant = models.IntegerField()
    dd_total = models.DecimalField(max_digits=5, decimal_places=2)
    precio_id = models.ForeignKey(Precio, on_delete=models.CASCADE)
    cd_id = models.ForeignKey(Cabecera_documento, on_delete=models.CASCADE)
    mesa_id = models.ForeignKey(Mesa, on_delete=models.CASCADE)
    createdAt = models.DateTimeField(auto_now_add=True)
    updatedAt = models.DateTimeField(auto_now=True)
    class Meta:
        db_table = 't_detalleDocumento'
        verbose_name_plural="Detalle de Documentos"
