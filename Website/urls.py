from django.urls import path
from .views import *

app_name = 'Website'

urlpatterns = [
    path('',HomeView.as_view(),name='home'),
    path('about',AboutView.as_view(),name="about"),
    # api paths
    path('api/brand/<int:pk>/details/' , BrandDetails.as_view(),name='brand-details'),
    path('api/brand/<int:pk>/hero-images/',HeroImageList.as_view(),name='hero-image-list'),
    path('api/hero-image/<int:pk>/details/',HeroImageEdit.as_view(),name='hero-image-edit'),
    
]
