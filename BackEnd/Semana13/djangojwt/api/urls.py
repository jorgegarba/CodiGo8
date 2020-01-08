from django.urls import path
from .views import lista_de_categorias, categoria_detalle, CrearUsuario

urlpatterns = [
    path('categorias/',lista_de_categorias, name="Lista de Categorias"),
    path('categoria/<int:pk>',categoria_detalle.as_view(), name="Detalle de Categoria"),
    path('crearusuario/',CrearUsuario.as_view(), name="Creacion de Usuario"),
]