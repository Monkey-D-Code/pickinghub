from django.contrib import admin
from .models import *
from django.utils.safestring import mark_safe
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
    
    
@admin.register(Seller)
class SellerAdmin(admin.ModelAdmin):
    fieldsets = (
        ("User" , {
            "fields" : (
                "user",
            )
        }),
        ("Information" , {
            "fields" :(
                "image","cover_image","contact_number","address","company_name","start_date","about","confirmed"
            )
        }),
        ("Date & Time" , {
            "fields":(
                "created_at",
            )
        })
    )
    readonly_fields = ["created_at","image","name"]
    list_display = ["thumbnail" , "name" , "created_at"]
    def image(self,obj):
        return mark_safe(
           f"<img src='{obj.cover_image}' style='height:20em;width:20em;object-fit:cover;border:4px solid pink' />"
        )

    def thumbnail(self,obj):
        return mark_safe(
            f"<img src='{obj.cover_image}' style='height:6em;width:6em;object-fit:cover;border-radius:50%;border:2px solid pink' />"
        )

    def name(self,obj):
        return mark_safe(
            f"<h3 style='font-size:1.5em;'>{obj.user.first_name} {obj.user.last_name}</h3>"
        )