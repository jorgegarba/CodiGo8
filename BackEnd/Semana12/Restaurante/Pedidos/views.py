from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
# from django.http import HttpResponse, JsonResponse
# Para la encriptacion de contraseñas
import bcrypt
# Serializador para validar los campos ingresados
from .serializers import Registro
# Para los estados de respuesta
from rest_framework import status
# Importamos los modelos para interactuar con nuestra base de datos
from .models import Usuario


class Registrar(APIView):
    # get, post, put, delete, ...
    def post(self, request, format=None):
        print(request.data)
        serializador = Registro(data=request.data)
        if serializador.is_valid():
            password = bytes(
                serializador.validated_data.get('password'), 'utf-8')
            salt = bcrypt.gensalt(rounds=13)
            hashed = bcrypt.hashpw(password, salt)
            salt = salt.decode('utf-8')
            hashed = hashed.decode('utf-8')
            # print(serializador.validated_data)
            usu = Usuario(
                usu_nom=serializador.validated_data.get('nombre'),
                usu_hash=hashed,
                usu_salt=salt,
                usu_tipo="1",
                usu_email=serializador.validated_data.get('email'),
                usu_fono=request.data['fono']
            )
            # Aqui recien se guarda en la base de datos, anteriormente solamente se construye el objecto
            usu.save()
            print(usu.usu_id)
            return Response({
                'ok': True,
                'message': 'Usuario creado exitosamente',
                'usuario': usu.json()
            }, status= status.HTTP_201_CREATED)
        else:
            return Response(serializador.errors, status=status.HTTP_400_BAD_REQUEST)
