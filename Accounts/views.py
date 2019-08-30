from django.contrib.auth.views import (
    LoginView,

)
from Website.models import (
    Brand,
)
from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView,
)
from Shop.models import Department
from django.views.generic import (
    TemplateView,
)

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