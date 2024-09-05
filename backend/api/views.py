from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import ListAPIView, CreateAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Pizza, User
from serializers import UserSerializer, PizzaSerializer

class PizzaListView(ListAPIView):
    permission_classes = [AllowAny]
    serializer_class = PizzaSerializer

class UserCreateView(CreateAPIView):
    permission_classes = [AllowAny]
    queryset = User.objects.all()
    serializer_class = UserSerializer

