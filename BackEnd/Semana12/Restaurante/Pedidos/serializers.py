from rest_framework import serializers
from .models import Tipo
class Registro(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()
    nombre = serializers.CharField(max_length=45)

class Login(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

# https://www.django-rest-framework.org/api-guide/serializers/

class TipoProductoSerializador (serializers.ModelSerializer):
    class Meta:
        model = Tipo
        fields = '__all__'