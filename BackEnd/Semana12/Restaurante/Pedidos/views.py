from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
# from django.http import HttpResponse, JsonResponse
# Para la encriptacion de contraseñas
import bcrypt
# Serializador para validar los campos ingresados
from .serializers import Registro, Login
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
            }, status=status.HTTP_201_CREATED)
        else:
            return Response(serializador.errors, status=status.HTTP_400_BAD_REQUEST)


class Logear(APIView):
    def post(self, request, format=None):
        serializador = Login(data=request.data)
        if serializador.is_valid():
            # devuelve el correo comprobado y que cumpla con las condiciones (tiene que tener un texto@texto.texto)
            correo = serializador.validated_data.get('email')
            # https://docs.djangoproject.com/en/3.0/topics/db/queries/
            # https://tutorial.djangogirls.org/es/django_orm/
            try:
                usuario = Usuario.objects.get(usu_email=correo)
                password = bytes(
                    serializador.validated_data.get('password'), 'utf-8')
                salt = bytes(usuario.usu_salt, 'utf-8')
                hashed = decode(bcrypt.hashpw(password, salt), 'utf-8')
                if hashed == usuario.usu_salt:
                    return Response({
                        'message':'Ok',
                        'content':'Bienvenido siñorsh {}'.format(usu_nom)
                    }, status = status.HTTP_200_OK)
                else:
                    return Response({
                        'message':'error',
                        'content':'Usuario o contraseña incorrectos'
                    }, status= status.HTTP_300_FORBIDDEN)
            except:
                return Response({'message': 'Usuario o contraseña incorrectos'}, status=status.HTTP_403_FORBIDDEN)
        else:
            return Response(serializador.errors, status=status.HTTP_400_BAD_REQUEST)
