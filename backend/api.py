from backend.models import *
from rest_framework import viewsets, permissions
from .serializers import *

class RecordViewSet(viewsets.ModelViewSet):
    queryset = Record.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = RecordSerializer


class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = UserSerializer
