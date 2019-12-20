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
    
    def update(self, instance, validated_data):
        instance.tipo_id = validated_data.get('tipo_id', instance.tipo_id)
        instance.tipo_desc = validated_data.get('tipo_desc', instance.tipo_desc)
        instance.save()
        return instance