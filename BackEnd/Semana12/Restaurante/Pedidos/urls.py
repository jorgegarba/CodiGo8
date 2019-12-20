from django.urls import path
from .views import Registrar, Logear

urlpatterns = [
    path('registro/', Registrar.as_view(), name="Registro de Usuarios"),
    path('login/', Logear.as_view(), name="Login de Usuarios"),
]
