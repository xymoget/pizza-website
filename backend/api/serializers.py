from rest_framework import serializers
from .models import Pizza, User, Cart

class PizzaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pizza
        fields = "__all__"

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["username", "password"]
        # extra_kwargs = {"password": {"write_only": True}}

    def create(self, validated_data):
        password = validated_data.pop('password')
        user = User(**validated_data)

        user.set_password(password)
        user.save()

        return user
    
class CartSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cart
        fields = "__all__"