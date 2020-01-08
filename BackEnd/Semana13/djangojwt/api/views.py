from django.shortcuts import render, get_object_or_404
from .models import CategoriaModel
from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response

from django.contrib.auth.models import User
from django.http import JsonResponse

from rest_framework import generics
from .serializer import UserSerializer
# Create your views here.


def lista_de_categorias(request):
    categorias = CategoriaModel.objects.all()
    rpta = {
        'resultado': list(categorias.values('descripcion', 'estado'))
    }
    return JsonResponse(rpta)


class categoria_detalle(APIView):
    permission_classes = (IsAuthenticated,)
    def get(self, request, pk):
        cat = get_object_or_404(CategoriaModel, pk=pk)
        return Response({
                'descripcion': cat.descripcion,
                'estado': cat.estado
            })

# Una vista generica solo funciona para un metodo pero este puede significar varios verbos (GET, PUT, DELETE)
# ListCreateAPIView => Devuelve o crea (GET o POST) una lista de entidades seleccionadas
# RetrieveDestroyAPIView => Devuelve los datos de una entidad o la elimina (GET o DELETE)
# CreateAPIView => Permite crear entidades pero a diferencia de la primera, no las devuelve (POST)

# Para mas información, consulte: https://www.django-rest-framework.org/api-guide/generic-views/
class CrearUsuario(generics.CreateAPIView):
    # serializer_class es un atributo de todas las APIViews generic ListView
    serializer_class = UserSerializer
