from django.contrib import admin

# Register your models here.
from .models import Tipo, Producto

# class TipoAdmin(admin.ModelAdmin):
#     """Aqui va toda la configuracion de mi Modelo en la parte de administracion"""
#     pass

# AQUI REGISTRO TODOS MIS MODELOS PARA QUE PUEDAN SER VISUALIZADOS EN LA PARTE ADMINISTRATIVA
admin.site.register(Tipo)
admin.site.register(Producto)