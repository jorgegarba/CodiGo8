from django.urls import path
from .views import Registrar

urlpatterns = [
    path('registro/', Registrar.as_view(), name="Registro de Usuarios"),
]
