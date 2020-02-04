from django.urls import path
from .views import *
from django.contrib.auth.views import (
    LogoutView,
)
from rest_framework.authtoken import views

app_name = 'Accounts'

urlpatterns = [
    path('web-login/' , WebloginView.as_view(),name='web-login'),
    path('profile/',ProfileView.as_view(),name='profile'),
    path('web-logout/' , LogoutView.as_view(),name='web-logout'),
    path('signup/', SignupView.as_view(),name='signup'),

    # api
    path('api/auth-token/',views.obtain_auth_token),
    path('api/customer-register/',CustomerRegisterView.as_view(),name='customer-register'),
    path('api/<int:pk>/get-profile/' , CustomerDetailsView.as_view(),name='get-profile'),
    path('api/<int:pk>/get-master/' , MasterDetailsView.as_view(),name='get-master'),
    path('api/customer-from-token/',CustomerFromToken.as_view(),name='get-customer'),
    path('api/seller-register/',SellerCreateView.as_view(),name='seller-register'),
    path('api/seller-login/',SellerLogin.as_view(),name='seller-login'),

    path('api/seller-update/',SellerProfileUpdateAPIView.as_view()),

    path('api/customer/<int:customer_id>/address/' ,CustomerAddressCreateAPIView.as_view()),
    path('api/customer/<int:customer_id>/contact/',CustomerContactCreateAPIView.as_view()),
]
