from django.urls import path
from .views import MiPrimeraVista

urlpatterns=[
    path('almacen/',MiPrimeraVista.as_view()),
    path('almacen/<int:id>',MiPrimeraVista.as_view()),
]