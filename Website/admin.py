from django.contrib import admin
from .models import *
# Register your models here.

class HeroImageInline(admin.TabularInline):
    model = HeroImage
    extra = 3

class NormalImageInline(admin.TabularInline):
    model = NormalImage
    extra = 3

class TermConditionInline(admin.TabularInline):
    model = TermCondition
    extra = 1

class PrivacyPolicyInline(admin.TabularInline):
    model = PrivacyPolicy
    extra = 1

class ReturnPolicyInline(admin.TabularInline):
    model = ReturnPolicy
    extra = 1



@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    inlines = [
        HeroImageInline , 
        NormalImageInline,
        TermConditionInline,
        PrivacyPolicyInline,
        ReturnPolicyInline
    ]
    fieldsets = (
        ("Name", {
            "fields": (
                ("full_name" , "short_name",),
            ),
        }),
        ("Information" , {
            "fields" : (
                "foundation_date","tag_line","logo_url","email","address","about","contact_number","gmap_src",
            ),
        }),
        ("Social Media Links" , {
            "fields" : (
                "facebook","twitter","instagram",
            ),
        }),
    )
    
