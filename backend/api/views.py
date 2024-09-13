from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import ListAPIView, CreateAPIView, DestroyAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Pizza, User, Cart
from .serializers import UserSerializer, PizzaSerializer, CartSerializer
from django.shortcuts import get_object_or_404

class PizzaListView(ListAPIView):
    permission_classes = [AllowAny]
    serializer_class = PizzaSerializer
    queryset = Pizza.objects.all()

class PizzaCreateView(CreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = PizzaSerializer
    queryset = Pizza.objects.all()

class PizzaDeleteView(DestroyAPIView):
    serializer_class = PizzaSerializer
    permission_classes = [AllowAny]
    queryset = Pizza.objects.all()

class PizzaRetrieveView(RetrieveAPIView):
    serializer_class = PizzaSerializer
    queryset = Pizza.objects.all()
    lookup_field = 'id'

class UserCreateView(CreateAPIView):
    permission_classes = [AllowAny]
    queryset = User.objects.all()
    serializer_class = UserSerializer

class CartRetrieveView(RetrieveAPIView):
    permission_classes = [IsAuthenticated]
    serializer_class = CartSerializer
    
    def get_object(self):
        user = self.request.user
        cart, created = Cart.objects.get_or_create(user=user)
        return cart
    
class CartAddPizzaView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = request.user
        pizza_id = request.POST.get("pizzaId", None)

        cart, created = Cart.objects.get_or_create(user=user)

        pizza = get_object_or_404(Pizza, id=pizza_id)

        cart.products.add(pizza)
        
        serializer = CartSerializer(cart)

        return Response(serializer.data, status=status.HTTP_200_OK)
    
class CartDeletePizzaView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        user = request.user
        pizza_id = request.POST.get("pizzaId", None)

        cart, created = Cart.objects.get_or_create(user=user)
        pizza = get_object_or_404(Pizza, id=pizza_id)

        cart.products.remove(pizza)

        serializer = CartSerializer(cart)

        return Response(serializer.data, status=status.HTTP_200_OK)
