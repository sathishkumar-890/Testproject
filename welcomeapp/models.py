from django.db import models


# Create your models here.

class UserInfo(models.Model):
    email = models.EmailField(unique=True)
    mobile_number = models.CharField(max_length=10)


