from django.contrib import admin
from .models import *
# Register your models here.

class HeroImageInline(admin.TabularInline):
    model = HeroImage
    extra = 3

class NormalImageInline(admin.TabularInline):
    model = NormalImage
    extra = 3


@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    inlines = [HeroImageInline , NormalImageInline]
    fieldsets = (
        ("Name", {
            "fields": (
                ("full_name" , "short_name",),
            ),
        }),
        ("Information" , {
            "fields" : (
                "foundation_date","tag_line","logo_url","address","contact_number","gmap_src",
            ),
        }),
    )
    
