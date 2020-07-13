from rest_framework.serializers import (
    ModelSerializer,
    CharField,
    ValidationError,
)
from .models import *
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token

class UserSerializer(ModelSerializer):

    class Meta:
        model = User
        fields = ('first_name','last_name','email','username','password')
        extra_kwargs = {
            'password':{
                'write_only':True,
            }
        }

class AddressSerializer(ModelSerializer):
    class Meta:
        model = Address
        fields = '__all__'

class ContactSerializer(ModelSerializer):
    class Meta:
        model = Contact
        fields = '__all__'


class CustomerCreateSerializer(ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Customer
        fields = '__all__'

    def create(self , validated_data):
        old_user = User.objects.filter(email=validated_data['user']['email'])
        if(old_user.count() > 0):
            raise ValidationError('Email already exists.')
        user = User.objects.create(
            first_name=validated_data['user']['first_name'],
            last_name=validated_data['user']['last_name'],
            username=validated_data['user']['username'],
            email=validated_data['user']['email'],
        )
        user.set_password(validated_data['user']['password'])
        user.save()
        customer = Customer.objects.create(
            user=user,
            middle_name=validated_data['middle_name'],
        )

        Token.objects.create(user=user)
        serializer = CustomerDetailsSerializer(customer)
        return serializer.data

class CustomerDetailsSerializer(ModelSerializer):
    user = UserSerializer()
    all_address = AddressSerializer(many=True)
    contacts = ContactSerializer(many=True)
    full_name = CharField()
    class Meta:
        model = Customer
        fields = '__all__'

    
class MasterSerializer(ModelSerializer):
    user = UserSerializer()
    full_name = CharField()
    exprience = CharField()
    class Meta:
        model = Master
        fields = '__all__'


class SellerSerializer(ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = Seller
        fields = '__all__'


    def create(self,validated_data):
        user_data = validated_data['user']
        user = User.objects.create(
            first_name = user_data["first_name"],
            last_name = user_data["last_name"],
            username = user_data["username"],
            email = user_data["email"],
            is_staff = True
        )
        user.set_password(user_data['password'])
        user.save()
        token = Token.objects.create(user=user)
        seller = Seller.objects.create(
            user = user,
            cover_image = validated_data['cover_image'],
            contact_number = validated_data['contact_number'],
            address = validated_data['address'],
            company_name = validated_data['company_name'],
            start_date = validated_data['start_date'],
            about = validated_data['about']
        )
        serializer = SellerSerializer(seller)
        return serializer.data