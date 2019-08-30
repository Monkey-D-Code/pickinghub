from rest_framework.serializers import (
    ModelSerializer,
    CharField,
)
from .models import *

class BrandSerializer(ModelSerializer):
    class Meta:
        model = Brand
        fields = '__all__'


class HeroImageSerializer(ModelSerializer):
    class Meta:
        model = HeroImage
        fields = '__all__'

class NormalImageSerializer(ModelSerializer):
    class Meta:
        model = NormalImage
        fields = '__all__'