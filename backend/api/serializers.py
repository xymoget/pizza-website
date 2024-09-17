from rest_framework import serializers
from .models import Pizza, User, Cart, CartProduct

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
    
class CartProductSerializer(serializers.ModelSerializer):
    pizza = PizzaSerializer()

    class Meta:
        model = CartProduct
        fields = ['pizza', 'quantity']
    
class CartSerializer(serializers.ModelSerializer):
    products = CartProductSerializer(source="cartproduct_set", many=True)
    class Meta:
        model = Cart
        fields = "__all__"