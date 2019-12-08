from django.urls import path
from .views import ListaProducto, ProductoDetalle, CategoriaURL

urlpatterns=[
    path('v1/productos/',ListaProducto.as_view(), name= "Lista de productos"),
    path('v1/productos/<int:pk>',ProductoDetalle.as_view(),name="Detalle de Producto"),
    path('v1/productos/add',ProductoDetalle.as_view(),name="Agregar un producto"),
    path('v1/categoria/<int:pk>', CategoriaURL.as_view(),name="Categoria por PK")

]