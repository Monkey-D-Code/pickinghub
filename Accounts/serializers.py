from rest_framework.serializers import (
    ModelSerializer,
    CharField,
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
        
        user = User.objects.create(
            first_name=validated_data['user']['first_name'],
            last_name=validated_data['user']['last_name'],
            username=validated_data['user']['username'],
            email=validated_data['user']['email'],
        )
        user.set_password(validated_data['user']['password'])
        user.save()
        Customer.objects.create(
            user=user,
            middle_name=validated_data['middle_name'],
        )

        Token.objects.create(user=user)
        return validated_data

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