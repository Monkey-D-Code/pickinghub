from rest_framework.serializers import (
    ModelSerializer,
    CharField,
)
from .models import *

class HeroImageSerializer(ModelSerializer):
    class Meta:
        model = HeroImage
        fields = '__all__'

class NormalImageSerializer(ModelSerializer):
    class Meta:
        model = NormalImage
        fields = '__all__'
        
class BrandSerializer(ModelSerializer):
    class Meta:
        model = Brand
        fields = '__all__'


