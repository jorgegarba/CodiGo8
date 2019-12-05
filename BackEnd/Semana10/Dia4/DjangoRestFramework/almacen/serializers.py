from rest_framework import serializers

class MiPrimeraVistaSerializer(serializers.Serializer):
    """Serializer es un campo de nombre para probar nuestra vista de nuesta API"""
    # especificamos que campos vamos a aceptar en nuestro serializador, un serializador es como un filtro para comprobar si todo esta en orden
    nombre = serializers.CharField(max_length=10)
    direccion = serializers.CharField(max_length=30) 