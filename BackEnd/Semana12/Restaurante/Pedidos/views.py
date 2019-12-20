from rest_framework.viewsets import ViewSet
from django.shortcuts import render, get_object_or_404
# get_object_or_404 traer el objeto y si no esta o no hay automaticamente devuelve un 404 => not found
from rest_framework.views import APIView
from rest_framework.response import Response
# from django.http import HttpResponse, JsonResponse
# Para la encriptacion de contraseñas
import bcrypt
# Serializador para validar los campos ingresados
from .serializers import Registro, Login, TipoProductoSerializador
# Para los estados de respuesta
from rest_framework import status
# Importamos los modelos para interactuar con nuestra base de datos
from .models import Usuario, Tipo


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
                hashed = bcrypt.hashpw(password, salt).decode('utf-8')
                if hashed == usuario.usu_hash:
                    return Response({
                        'message': 'Ok',
                        'content': 'Bienvenido siñorsh {}'.format(usuario.usu_nom)
                    }, status=status.HTTP_200_OK)
                else:
                    return Response({
                        'message': 'error',
                        'content': 'Usuario o contraseña incorrectos'
                    }, status=status.HTTP_300_FORBIDDEN)
            except:
                return Response({'message': 'Usuario o contraseña incorrectos'}, status=status.HTTP_403_FORBIDDEN)
        else:
            return Response(serializador.errors, status=status.HTTP_400_BAD_REQUEST)


# APIViews => get post put delete patch options...
# es el tipo mas basico de usar una API, describe como va a ser el comportamiento de nuestros endpoint
# cuando usar APIViews ?
# 1. cuando necesitamos un control completo de nuestra logica
# 2. Procesar archivos y renderizar respuestas asincronas
# 3. Cuando se llama a otras API en el mismo request
# 4. Accesar a archivos locales o informacion

# VIEWSets => list, create, retrive, update, patrial_update ....
# como en las APIs nos permite escribir la logica de nuestros endpoint, sin embargo en los viewsets en vez de definir funciones que mapean nuestros metodos HTTP, los viewsets crean funciones que mapean acciones a los objetos de la API como list que trae una lista de objetos, create para crear nuevos objetos, retrieve para devolver un objeto en especifico, update para actualizar un objeto, partial_update (patch) para actualizar una parte de un objeto y destroy para eliminar un objeto, adicionalmente los viewset toman cuidado de nuesta logica de nuestros endpoints para nostros, es perfecto para estandarizar la base de datos, y es la manera mas rapida para interactuar con nuestra base de datos.
# Cuando usar VIEWSets ?
# 1. Muchas veces se refiere a nuestras preferencias personales
# 2. Para hacer un crud simple de nuestra base de datos
# 3. para una API simple
# 4. No tener mucha logia en nuestra API
# 5. Cuando nuestra base de datos trabaja con una estructura estandar
# https://www.django-rest-framework.org/api-guide/viewsets/


class TipoProducto (ViewSet):
    def list(self, request, format=None):
        tipos = Tipo.objects.all()
        resultado = []
        if tipos:
            for tipo in tipos:
                tipotemporal = {
                    'id': tipo.tipo_id,
                    'descripcion': tipo.tipo_desc
                }
                resultado.append(tipotemporal)
            return Response({
                'message': 'ok',
                'content': resultado
            }, status=status.HTTP_200_OK)
        else:
            return Response({
                'message': 'Ok',
                'content': None
            }, status=200)

    def create(self, request):
        serializador = TipoProductoSerializador(data=request.data)
        if serializador.is_valid():
            serializador.save()
            return Response(serializador.validated_data)
        else:
            return Response(serializador.errors, status=500)

    # retrive sirve como un get pero con parametros, en este caso le mandamos el parametro pk para que lo valide y traiga el tipo de producto
    def retrieve(self, request, pk=None):
        """Maneja los objectos segun su PK"""
        tp = get_object_or_404(Tipo, pk=pk)
        data = TipoProductoSerializador(tp).data
        return Response(data)

    def update(self, request, pk):
        """Actualiza un objecto segun su PK"""
        data = TipoProductoSerializador(data=request.data)
        if data.is_valid():
            Tipo.objects.filter(tipo_id=pk).update(tipo_desc=data.validated_data.get('tipo_desc'))
            tipo = get_object_or_404(Tipo, pk=pk)
            data = TipoProductoSerializador(tipo).data
            return Response(data)
        else:
            return Response(data.errors, status=403)
    
    def destroy(self,request,pk):
        get_object_or_404(Tipo, pk=pk)
        Tipo.objects.filter(tipo_id=pk).delete()
        return Response({
            'message':'Ok',
            'content':'Se elimino el tipo con exito'
        }, status=200)


class MesasView(ViewSet):
    def list(self,request):
        pass
    def create(self,request):
        pass
    def retrieve(self,request,pk):
        pass
    def update(self,request,pk):
        pass
    def destroy(self,request, pk):
        pass