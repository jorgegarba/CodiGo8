# para los viewset necesito importar include
from django.urls import path, include
from .views import Registrar, Logear, TipoProducto

# para los viewset
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register('tipoProducto',TipoProducto,basename="Tipo Producto")


urlpatterns = [
    path('registro/', Registrar.as_view(), name="Registro de Usuarios"),
    path('login/', Logear.as_view(), name="Login de Usuarios"),
    # Ahora incluyo todas mis rutas definida en mi router para que puedar ser accesibles por mi padre urls.py ubicado en la carpeta Restaurante
    path('',include(router.urls)),
]
