from django.views.generic import (
    DetailView,
)
from .models import *
from Website.models import Brand
from rest_framework.generics import (
    ListAPIView,
    RetrieveAPIView,
    CreateAPIView,
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
from rest_framework.pagination import PageNumberPagination
from rest_framework.filters import (
    SearchFilter,
    OrderingFilter,
)

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

class CategoryWise5ProductsAPIView(ListAPIView):
    serializer_class = Category5productsSerializer
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

class SpecialDealListCreate(ListCreateAPIView):
    serializer_class = SpecialDealSerializer
    queryset = SpecialDeal.objects.all()

# orders
class NewOrderAPIView(APIView):
    def post(self,request,customer_id):
        cart = request.data
        customer = Customer.objects.get(id=customer_id)
        order = Order.objects.create(
            customer = customer
        )
        for sublet in cart:
            sublet_from_db = Sublet.objects.get(id=sublet["id"])
            SingleOrder.objects.create(
                order=order,
                sublet=sublet_from_db,
                quantity=sublet["quantity"]
            )
            serializer = OrderSerializer(order)
        return Response(serializer.data,status=status.HTTP_201_CREATED)


class VariantsOfProduct(ListAPIView):
    serializer_class = VariantSerializer
    queryset = Variant.objects.all()

    def get_queryset(self):
        return self.queryset.filter(product_id=self.kwargs.get('product_id'))
    
class SearchProductsAPIView(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    pagination_class = PageNumberPagination
    filter_backends = (SearchFilter,OrderingFilter)
    search_fields = ('name','company__full_name','category__name','category__demographic__name')


class AllProductsOfSeller(ListCreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get_queryset(self):
        return self.queryset.filter(
            seller=self.kwargs.get('seller_id')
        )
    
class DemographicListAPIView(ListAPIView):
    queryset = Demographic.objects.all()
    serializer_class = DemographicSerializer

    def get_queryset(self):
        return self.queryset.filter(
            department = self.kwargs.get('pk')
        )


class CategoryListAPIView(ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategoryListSerializer

    def get_queryset(self):
        return self.queryset.filter(
            demographic = self.kwargs.get('pk')
        )
    

class CompanyListAPIView(ListAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializer


class ProductCreateAPIView(CreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductcreateSerializer

class VariantCreateAPIView(CreateAPIView):
    queryset = Variant.objects.all()
    serializer_class = VariantCreateSerializer

class SubletCreateAPIView(CreateAPIView):
    queryset = Sublet.objects.all()
    serializer_class = SubletCreateSerializer

class AllOrdersApiView(ListAPIView):
    queryset = Order.objects.all().order_by("-date" , "-time")
    serializer_class = OrderSerializer

    def get_queryset(self):
        return self.queryset.filter(customer=self.kwargs.get('customer_id'))

class OrderDetailsAPIView(RetrieveAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderDetailsSerializer
    

class Products5OfCategory(ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get_queryset(self):
        return self.queryset.filter(category=self.kwargs.get('pk')).order_by("?")[:5]
    

class ReviewCreateView(CreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

class ReviewCreateApiView(APIView):
    def post(self,request):
        reviewData  =   request.data;
        review      =   Review.objects.create(
            customer_id =  reviewData['customer'],
            product_id  =   reviewData['product'],
            rating      =   reviewData['rating'],
            comment     =   reviewData['comment'],
        )

        serializer = ReviewSerializer(review);
        return Response(serializer.data,status=status.HTTP_201_CREATED)