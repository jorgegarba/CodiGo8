from rest_framework import serializers
from .models import Tipo, Mesa, Producto
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

class MesaSerializador (serializers.ModelSerializer):
    # El modelSerializer serializa segun el modelo (tabla) que vamos a referenciar
    class Meta:
        model = Mesa
        # si quiero determinar que campos voy a utilizar uso el parametro fields
        # si quiero determinar que campos voy a excluir uso el parametro exclude
        # NOTA: solo se puede usar uno de los dos, no se pueden usar los dos a la vez
        fields = '__all__'
    # para cuando nosotros necesitemos utilizar mas de una vez o la tabla contenga muchos atributos, se recomienda el uso de sobreescribir el metodo update para actualizarlo dentro del mismo serializador
    # def update(self,isinstance,validated_data):

class ProductoSerializador (serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields= '__all__'