from django.contrib import admin
from .models import *
from django.utils.safestring import mark_safe
from django.contrib.auth.models import User
from django.contrib.auth.admin import UserAdmin
from typing import Set


# Unregister the provided model admin
admin.site.unregister(User)


@admin.register(User)
class CustomUserAdmin(UserAdmin):
    def get_queryset(self,request):
        qs = super(UserAdmin, self).get_queryset(request)
        if request.user.is_superuser:
            return qs
        return qs.filter(id=request.user.id)

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        is_superuser = request.user.is_superuser
        disabled_fields = set()

        if (
            not is_superuser
            and obj is not None
            and obj == request.user
        ):
            disabled_fields |= {
                'is_staff',
                'is_superuser',
                'groups',
                'user_permissions',
            }
            disabled_fields |= {
                'username',
                'is_superuser',
                'is_staff',
                'is_active',
                'user_permissions',
                'user_groups',
            }

        for f in disabled_fields:
            if f in form.base_fields:
                form.base_fields[f].disabled = True

        return form


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
    def get_queryset(self,request):
        qs = super(SellerAdmin, self).get_queryset(request)
        if request.user.is_superuser:
            return qs
        return qs.filter(user=request.user)

    def get_form(self, request, obj=None, **kwargs):
        form = super().get_form(request, obj, **kwargs)
        is_superuser = request.user.is_superuser
        disabled_fields = set()

        if (
            not is_superuser
            and obj is not None
            and obj == request.user
        ):
            
            disabled_fields |= {
                'confirmed',
                
            }

        for f in disabled_fields:
            if f in form.base_fields:
                form.base_fields[f].disabled = True

        return form
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