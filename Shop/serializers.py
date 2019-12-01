from rest_framework.serializers import (
    ModelSerializer,
    URLField,
    DecimalField,
    BooleanField
)
from .models import *

class DepartmentSerializer(ModelSerializer):
    class Meta:
        model = Department
        fields = '__all__'



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
    random_product_image = URLField()
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

class Category5productsSerializer(ModelSerializer):
    five_products = ProductSerializer(many=True)
    class Meta:
        model = Category
        fields = '__all__'

class DemographicSerializer(ModelSerializer):
    categories = CategorySerializer(many=True)
    class Meta:
        model = Demographic
        fields = '__all__'


class DepartmentDetailSerializer(ModelSerializer):
    demographics = DemographicSerializer(many=True)
    class Meta:
        
        model = Department
        fields = '__all__'


class SingleOrderSerializer(ModelSerializer):
    total = DecimalField(max_digits=9,decimal_places=2)
    class Meta:
        model = SingleOrder
        fields = '__all__'


class OrderSerializer(ModelSerializer):
    sum = DecimalField(max_digits=9,decimal_places=2)
    orders = SingleOrderSerializer(many=True)
    class Meta:
        model = Order
        fields = '__all__'


class SpecialDealSerializer(ModelSerializer):
    has_expired = BooleanField()
    products = ProductSerializer(many=True)
    class Meta:
        model = SpecialDeal
        fields = '__all__'


