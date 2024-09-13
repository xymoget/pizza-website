from django.urls import path
from . import views

urlpatterns = [
    path("users/create/", views.UserCreateView.as_view()),
    path("pizzas/", views.PizzaListView.as_view()),
    path("pizzas/<int:id>/", views.PizzaRetrieveView.as_view()),
    path("pizzas/delete/", views.PizzaDeleteView.as_view()),
    path("pizzas/create/", views.PizzaCreateView.as_view()),
    path("cart/add-pizza/", views.CartAddPizzaView.as_view()),
    path("cart/remove-pizza/", views.CartDeletePizzaView.as_view()),
    path("cart/", views.CartRetrieveView.as_view()),
]