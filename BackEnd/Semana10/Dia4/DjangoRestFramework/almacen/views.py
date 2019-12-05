from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import MiPrimeraVistaSerializer
# Create your views here.

class MiPrimeraVista(APIView):
    serializer_class = MiPrimeraVistaSerializer
    almacenes = []
    def get(self, request, format=None):
        """Regresa una lista de almacenes"""
        # convierte automaticamente a un JSON
        return Response({
            'message':'Ok',
            'content':{
                'almacenes':self.almacenes
            }
        })
    def post(self,request,format=None):
        serializador = self.serializer_class(data=request.data)
        # el serializador tiene un metodo llamado is_valid que valida si toda la data esta ingresada correctamente
        print(serializador.is_valid())
        # el serializador tiene un metodo llamado error que nos va a devolver el error que falta para que se cumpla el serializador
        print(serializador.errors)
        if serializador.is_valid():
            almacen = {
                'nombre':serializador.validated_data.get('nombre'),
                'direccion': serializador.validated_data.get('direccion')
            }
            self.almacenes.append(almacen)
            return Response({
                'message':'Se agrego el almacen con exito',
                'content':self.almacenes
            })
        else:
            return Response(serializador.errors,status=status.HTTP_400_BAD_REQUEST)
    
    def put(self,request,id,format=None):
        longitud = len(self.almacenes)
        if id > longitud-1:
            return Response({
                'message':'El id no existe'
            }, status= status.HTTP_404_NOT_FOUND)
        serializador = self.serializer_class(data=request.data)
        if serializador.is_valid():
            self.almacenes[id]['nombre']=serializador.validated_data.get('nombre')
            self.almacenes[id]['direccion'] = serializador.validated_data.get('direccion')
            return Response({
                'almacen':self.almacenes[id]
            })
        else:
            return Response(serializador.errors, status= status.HTTP_400_BAD_REQUEST)
