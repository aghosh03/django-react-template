from django import forms 
from .models import Record, UserSettings

class RecordForm(forms.ModelForm):
    class Meta:
        model = Record
        fields = '__all__'


class SettingsForm(forms.ModelForm):
    class Meta:
        model = UserSettings
        fields = '__all__'
