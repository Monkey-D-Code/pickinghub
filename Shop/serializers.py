from rest_framework.serializers import (
    ModelSerializer,
    URLField,
)
from .models import *

class ProductImageSerializer(ModelSerializer):
    class Meta:
        model = ProductImage
        fields = '__all__'


class SubletSerializer(ModelSerializer):
    productimages = ProductImageSerializer(many=True)
    class Meta:
        model = Sublet
        fields = '__all__'


class VariantSerializer(ModelSerializer):
    sublets = SubletSerializer(many=True)
    class Meta:
        model = Variant
        fields = '__all__'


class InformationSerializer(ModelSerializer):
    class Meta:
        model = Information
        fields = '__all__'

class DiscountOfferSerializer(ModelSerializer):
    class Meta:
        model = DiscountOffer
        fields = '__all__'

class ReviewSerializer(ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'

class QuestionSerializer(ModelSerializer):
    class Meta:
        model = Question
        fields = '__all__'

class ProductDetailsSerializer(ModelSerializer):
    informations = InformationSerializer(many=True)
    discountoffers = DiscountOfferSerializer(many=True)
    variants = VariantSerializer(many=True)
    reviews = ReviewSerializer(many=True)
    questions = QuestionSerializer(many=True)
    class Meta:
        model = Product
        fields = '__all__'
        depth = 1



class ProductSerializer(ModelSerializer):
    random_product_image = URLField()
    class Meta:
        model = Product
        fields = '__all__'
        depth=1


class CategorySerializer(ModelSerializer):
    all_products = ProductSerializer(many=True)
    class Meta:
        model = Category
        fields = '__all__'