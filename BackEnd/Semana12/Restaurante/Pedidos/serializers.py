from rest_framework import serializers

class Registro(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()
    nombre = serializers.CharField(max_length=45)

class Login(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()