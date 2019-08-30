from django.urls import path
from .views import *

app_name = 'Website'

urlpatterns = [
    path('',HomeView.as_view(),name='home'),

    # api paths
    path('api/brand/<int:pk>/details/' , BrandDetails.as_view(),name='brand-details'),
]
