from rest_framework.serializers import (
    ModelSerializer,
    CharField,
    URLField,
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
    random_hero_image = URLField(max_length=600)
    random_normal_image = URLField(max_length=600)
    class Meta:
        model = Brand
        fields = '__all__'


