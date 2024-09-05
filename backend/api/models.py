from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    pass

class Pizza(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    price = models.FloatField()
    picture = models.ImageField(upload_to='pizza-pictures/', null=True, blank=True)