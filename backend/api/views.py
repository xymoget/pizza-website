from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import ListAPIView, CreateAPIView, DestroyAPIView, RetrieveAPIView
from rest_framework.permissions import IsAuthenticated, AllowAny
from .models import Pizza, User
from .serializers import UserSerializer, PizzaSerializer

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

