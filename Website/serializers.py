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

class TermConditionSerializer(ModelSerializer):
    class Meta:
        model = TermCondition
        fields = '__all__'


class PrivacyPolicySerializer(ModelSerializer):
    class Meta:
        model = PrivacyPolicy
        fields = '__all__'

class ReturnPolicySerializer(ModelSerializer):
    class Meta:
        model = ReturnPolicy
        fields = '__all__'
        
class BrandSerializer(ModelSerializer):
    random_hero_image = URLField(max_length=600)
    random_normal_image = URLField(max_length=600)
    terms_conditions = TermConditionSerializer(many=True)
    privacy_policy = PrivacyPolicySerializer(many=True)
    return_policy = ReturnPolicySerializer(many=True)
    class Meta:
        model = Brand
        fields = '__all__'


