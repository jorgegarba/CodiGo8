from rest_framework import serializers
from django.contrib.auth.models import User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username','email','password')
        # extra_kwargs sirve para definir que los campos solicitados, tengan un comportamiento diferente
        # https://www.django-rest-framework.org/api-guide/serializers/#additional-keyword-arguments
        extra_kwargs = {
            'password':{
                'write_only':True
            }
        }
    
    def create(self, validated_data):
        user = User(
            email= validated_data['email'],
            username = validated_data['username']
        )
        # el metodo set_password encripta la contraseña con un fuerte cifrado, este metodo es exclusivo del modelo auth_user
        user.set_password(validated_data['password'])
        user.save()
        return user