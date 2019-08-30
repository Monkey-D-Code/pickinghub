from django.views.generic import (
    TemplateView,
)
from .models import *
from Shop.models import (
    Department,
)
from rest_framework.generics import (
    ListCreateAPIView,
    RetrieveUpdateDestroyAPIView,
)
from .serializers import *
# Create your views here.
class HomeView(TemplateView):
    template_name = 'Website/home.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["brand"] = Brand.objects.get(id=1)
        context['departments'] = Department.objects.all()
        return context
        
    
# api views
class BrandDetails(RetrieveUpdateDestroyAPIView):
    serializer_class = BrandSerializer
    queryset = Brand.objects.all()