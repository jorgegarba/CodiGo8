from django.urls import path
from .views import ListaProducto

urlpatterns=[
    path('v1/productos/',ListaProducto.as_view(), name= "Lista de productos"),
]