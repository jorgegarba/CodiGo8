# es la libreria que se usa para especificar las rutas
from django.urls import path
from .views import lista_categoria, categoria_id, agregarCategoria, actualizarCategoria
# en esta variable se almacenan todas las rutas de nuestra aplicacion
urlpatterns = [
    path('categorias/',lista_categoria, name="Lista de Categorias"),
    path('categorias/<int:pk>',categoria_id,name="Lista de Categoria"),
    path('categorias/add',agregarCategoria),
    path('categorias/update/<int:pk>',actualizarCategoria),
]