from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from .models import Producto
# https://www.django-rest-framework.org/api-guide/status-codes/
from rest_framework import status
from .serializers import ProductoSerializer

class ListaProducto(APIView):
    def get(self,request,format=None):
        productos = Producto.objects.all()
        data = ProductoSerializer(productos,many=True).data
        print(data)
        return Response({
            'message':'Ok',
            'content': data
            }, status = status.HTTP_200_OK)
