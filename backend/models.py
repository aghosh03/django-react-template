from django.db import models
from django.contrib.auth.models import User

EMAIL_FREQUENCY = [
        ('daily',"Daily"),
        ('daily',"Weekly"),
        ('daily',"Monthly"),
    ]

class Record(models.Model):
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=200, blank=True)
    description = models.CharField(max_length=200, blank=True)
    created_by = models.CharField(max_length=200, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=200, blank=True)
    details = models.CharField(max_length=200, blank=True)

    class Meta:
        verbose_name_plural = 'records'


class UserSettings(models.Model):
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    username = models.CharField(max_length=200, blank=True)
    email = models.CharField(max_length=200, blank=True)
    first_name = models.CharField(max_length=200, blank=True)
    last_name = models.CharField(max_length=200, blank=True)
    mobile = models.CharField(max_length=200, blank=True)
    password = models.CharField(max_length=200, blank=True)
    receive_emails = models.BooleanField(default=True)
    email_frequency = models.CharField(choices = EMAIL_FREQUENCY, max_length=200, default=EMAIL_FREQUENCY[0])
    
    class Meta:
        verbose_name_plural = 'settings'