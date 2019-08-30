from django.contrib import admin
from .models import *
# Register your models here.

class AddressInline(admin.StackedInline):
    model = Address
    extra = 1

class ContactInline(admin.TabularInline):
    model = Contact
    extra = 2


@admin.register(Customer)
class CustomerAdmin(admin.ModelAdmin):
    inlines = [ContactInline,AddressInline,]
    fieldsets = (
        ("User", {
            "fields": (
                "user",
            ),
        }),
        ("Information" , {
            "fields":(
                "middle_name" , "vendor",
            ),
        }),
        
    )

@admin.register(Master)
class MasterAdmin(admin.ModelAdmin):
    fieldsets = (
        ("User", {
            "fields": (
                "user",
            ),
        }),
        ("Information" , {
            "fields":(
                "middle_name" , "date_of_birth" , "short_bio" , "joining_date","display_image","contact_number"
            )
        })
    )
    
    
