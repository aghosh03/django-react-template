from django.urls import path, re_path, include
from rest_framework import routers
from .api import *
from . import views

app_name = "backend"
router = routers.DefaultRouter()
router.register(r'records', RecordViewSet, 'records')
router.register(r'users', UserViewSet, 'users')

urlpatterns = [
     path('',views.index, name="index"),
     path('settings/',views.settings, name="settings"),
     re_path('data/', include((router.urls)))
]