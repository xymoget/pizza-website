from django.urls import path
from . import views

urlpatterns = [
    path("users/create/", views.UserCreateView.as_view()),
    path("pizzas/", views.PizzaListView.as_view()),
]