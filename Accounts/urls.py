from django.urls import path
from .views import *
from django.contrib.auth.views import (
    LogoutView,
)

app_name = 'Accounts'

urlpatterns = [
    path('web-login/' , WebloginView.as_view(),name='web-login'),
    path('profile/',ProfileView.as_view(),name='profile'),
    path('web-logout/' , LogoutView.as_view(),name='web-logout'),
    path('signup/', SignupView.as_view(),name='signup'),

    # api
    path('api/customer-register/',CustomerRegisterView.as_view(),name='customer-register'),
    path('api/<int:pk>/get-profile/' , CustomerDetailsView.as_view(),name='get-profile'),
    path('api/<int:pk>/get-master/' , MasterDetailsView.as_view(),name='get-master'),
]
