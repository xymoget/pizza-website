from django.urls import path
from . import views

urlpatterns = [
    path("users/create/", views.UserCreateView.as_view()),
    path("pizzas/", views.PizzaListView.as_view()),
    path("pizzas/<int:id>/", views.PizzaRetrieveView.as_view()),
    path("pizzas/delete/", views.PizzaDeleteView.as_view()),
    path("pizzas/create/", views.PizzaCreateView.as_view()),
]