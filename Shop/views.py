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
from rest_framework.views import (
    APIView,
    
)
from rest_framework.generics import (
    ListAPIView,
    ListCreateAPIView,
)
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
class DepartmentDetailView(DetailView):
    model = Department
    template_name = 'Shop/department_detail.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["brand"] = Brand.objects.get(id=1) 
        context['departments'] = Department.objects.all()
        return context
    

class DemographicDetailView(DetailView):
    model = Demographic
    template_name = 'Shop/demographic_detail.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["brand"] = Brand.objects.get(id=1) 
        context['departments'] = Department.objects.all() 
        return context
    
class CategoryDetailView(DetailView):
    model = Category
    template_name = 'Shop/category_detail.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["brand"] = Brand.objects.get(id=1) 
        context['departments'] = Department.objects.all()
        context['products'] = Product.objects.filter(category=self.kwargs.get('pk')) 
        return context
    
class ProductDetailView(DetailView):
    model = Product
    template_name = 'Shop/product_detail.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["brand"] = Brand.objects.get(id=1) 
        context['departments'] = Department.objects.all()
        return context
    
#  API views
class ProductDetailApiView(RetrieveAPIView):
    serializer_class = ProductDetailsSerializer
    queryset = Product.objects.all()


class TrendingProducts(ListAPIView):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

    def get_queryset(self):
        return self.queryset.filter(trending=True)

class CategoryWiseProductsAPIView(ListAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

class CategoryDetailAPIView(RetrieveAPIView):
    serializer_class = CategorySerializer
    queryset = Category.objects.all()

class SearchResultApiView(APIView):
    def post(self,request):
        print(request)
        return Response({'foo':'bar'})


class DepartmentListAPIView(ListCreateAPIView):
    serializer_class = DepartmentSerializer
    queryset = Department.objects.all()

class DepartmentDetailApiView(RetrieveAPIView):
    serializer_class = DepartmentDetailSerializer
    queryset = Department.objects.all()

    