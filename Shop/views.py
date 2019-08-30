from django.views.generic import (
    DetailView,
)
from .models import *
from Website.models import Brand
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
)
from .serializers import *
# Create your views here.
class DepartmentDetailView(DetailView):
    model = Department

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["brand"] = Brand.objects.get(id=1) 
        context['departments'] = Department.objects.all()
        return context
    

class DemographicDetailView(DetailView):
    model = Demographic

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["brand"] = Brand.objects.get(id=1) 
        context['departments'] = Department.objects.all() 
        return context
    
class CategoryDetailView(DetailView):
    model = Category

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["brand"] = Brand.objects.get(id=1) 
        context['departments'] = Department.objects.all()
        context['products'] = Product.objects.filter(category=self.kwargs.get('pk')) 
        return context
    
class ProductDetailView(DetailView):
    model = Product

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["brand"] = Brand.objects.get(id=1) 
        context['departments'] = Department.objects.all()
        return context
    
#  API views
class ProductDetailApiView(RetrieveAPIView):
    serializer_class = ProductDetailsSerializer
    queryset = Product.objects.all()