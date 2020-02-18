from django.contrib.auth.views import (
    LoginView,

)
from Website.models import (
    Brand,
)
from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView,
    CreateAPIView,
)
from Shop.models import Department
from django.views.generic import (
    TemplateView,
)
from rest_framework.views import (
    APIView,
)
from rest_framework.response import (
    Response
)
from rest_framework import status
from .serializers import *
from django.contrib.auth.mixins import LoginRequiredMixin
from django.urls import reverse_lazy
# Create your views here.
class WebloginView(LoginView):
    template_name = 'Accounts/login.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["brand"] = Brand.objects.get(id=1)
        context['departments'] = Department.objects.all()
        return context

class SignupView(TemplateView):
    template_name = 'Accounts/signup.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["brand"] = Brand.objects.get(id=1)
        context['departments'] = Department.objects.all()
        return context
    
class ProfileView(LoginRequiredMixin,TemplateView):
    template_name = 'Accounts/profile.html'
    login_url = reverse_lazy('Accounts:web-login')

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        if self.request.user.is_authenticated:
            user = self.request.user
            customer = Customer.objects.filter(user=user)
            master = Master.objects.filter(user=user)
            if customer.count() > 0 :
                context["customer"] = Customer.objects.get(user=user)
            if master.count() > 0 :
                context["master"] = Master.objects.get(user=user)

                
        context["brand"] = Brand.objects.get(id=1)
        context['departments'] = Department.objects.all()
        return context


# api views
class CustomerRegisterView(ListCreateAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerCreateSerializer
    
class CustomerDetailsView(RetrieveUpdateDestroyAPIView):
    queryset = Customer.objects.all()
    serializer_class = CustomerDetailsSerializer

class MasterDetailsView(RetrieveUpdateDestroyAPIView):
    queryset = Master.objects.all()
    serializer_class = MasterSerializer


class CustomerFromToken(APIView):
    def post(self,request):
        token_key = request.data["token"]
        token = Token.objects.get(key=token_key)
        user = User.objects.get(id=token.user_id)
        customer = Customer.objects.get(user=user)
        serializer = CustomerDetailsSerializer(customer)
        return Response(serializer.data)


class SellerCreateView(CreateAPIView):
    queryset = Seller.objects.all()
    serializer_class = SellerSerializer

class SellerLogin(APIView):
    def post(self,request):
        key = request.data['token']
        token = Token.objects.get(key=key)
        user = User.objects.get(id=token.user_id)
        seller = Seller.objects.get(user=user)
        if seller:
            serializer = SellerSerializer(seller)
            return Response(serializer.data , status=status.HTTP_200_OK)
        else:
            return Response({'error':'Invalid seller username or password !'},status=status.HTTP_400_BAD_REQUEST)
    
        

class SellerWebView(TemplateView):
    template_name = 'seller-ui.html'


class SellerProfileUpdateAPIView(APIView):
    def post(self,request):
        newSellerData = request.data
        newUserData = newSellerData['user']
        seller = Seller.objects.get(id=newSellerData['id'])
        seller.contact_number = newSellerData['contact_number']
        seller.cover_image = newSellerData['cover_image']
        seller.company_name = newSellerData['company_name']
        seller.start_date = newSellerData['start_date']
        seller.about = newSellerData['about']
        seller.address = newSellerData['address']
        seller.save()
        user = User.objects.get(id=seller.user_id)
        user.first_name = newUserData['first_name']
        user.last_name = newUserData['last_name']
        user.email = newUserData['email']
        user.save()
        serializer = SellerSerializer(seller)
        return Response(serializer.data , status=status.HTTP_200_OK)


class CustomerAddressCreateAPIView(ListCreateAPIView):
    queryset = Address.objects.all()
    serializer_class = AddressSerializer

    def get_queryset(self):
        return self.queryset.filter(customer=self.kwargs.get('customer_id'))
    
class CustomerContactCreateAPIView(ListCreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def get_queryset(self):
        return self.queryset.filter(customer=self.kwargs.get('customer_id'))