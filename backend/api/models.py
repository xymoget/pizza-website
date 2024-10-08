from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    pass

class Pizza(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.FloatField()
    picture = models.ImageField(upload_to='pizza-pictures/', null=True, blank=True)

class Cart(models.Model):
    user = models.ForeignKey(to=User, on_delete=models.CASCADE)
    products = models.ManyToManyField(Pizza, through='CartProduct')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

class CartProduct(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    pizza = models.ForeignKey(Pizza, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)