from django.forms import ModelForm
from .models import *

class UpdateStatusShop(ModelForm):
    class Meta:
        model = Shop
        fields = ['status']
