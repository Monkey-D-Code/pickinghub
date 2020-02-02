from django.urls import path
from .views import *

app_name = 'Shop'

urlpatterns = [
    path('department/<int:pk>/', DepartmentDetailView.as_view(),name='department-details'),
    path('demographic/<int:pk>/' , DemographicDetailView.as_view() , name='demographic-details'),
    path('category/<int:pk>/' , CategoryDetailView.as_view() ,name='category-details'),
    path('product/<int:pk>/' , ProductDetailView.as_view() , name='product-details'),

    # API view
    path('api/department/list/',DepartmentListAPIView.as_view()),
    path('api/department/<int:pk>/',DepartmentDetailApiView.as_view()),
    path('api/category/<int:pk>/',CategoryDetailAPIView.as_view()),

    path('api/product/<int:pk>/details/',ProductDetailApiView.as_view()),
    path('api/product/<int:product_id>/variants/',VariantsOfProduct.as_view()),
    path('api/trending-products/',TrendingProducts.as_view()),
    path('api/special-deals/',SpecialDealListCreate.as_view()),
    path('api/category-wise-products/',CategoryWiseProductsAPIView.as_view()),
    path('api/category-wise-5-products/',CategoryWise5ProductsAPIView.as_view()),
    
    path('api/search-products/',SearchProductsAPIView.as_view()),

    path('api/order/<int:customer_id>/new/',NewOrderAPIView.as_view()),

    # seller related urls
    path('api/seller/<int:seller_id>/products/',AllProductsOfSeller.as_view()),
    path('api/category/all',CategoryListAPIView.as_view()),
    path('api/company/all',CompanyListAPIView.as_view()),
    path('api/product/create/',ProductCreateAPIView.as_view()),
    path('api/variant/create/',VariantCreateAPIView.as_view()),
    path('api/sublet/create/',SubletCreateAPIView.as_view()),
]
