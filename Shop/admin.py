from django.contrib import admin
from django import forms
from .models import *
from Accounts.models import Seller
from nested_admin import NestedModelAdmin, NestedStackedInline, NestedTabularInline
from django.utils.safestring import mark_safe
# Register your models here.


#admin fields
class CustomerChoiceField(forms.ModelChoiceField):
     def label_from_instance(self, obj):
         return f"Name : {obj.full_name} | Phone : {obj.contact.number} | Address : {obj.address}"

@admin.register(Department)
class DepartmentAdmin(admin.ModelAdmin):
    fieldsets = (
        ("Information", {
            "fields": (
                "name","slug","image","cover_image","desc",
            ),
        }),
        ("Timestamp" , {
            "fields" : (
                "date" , "time"
            )
        })
    )
    readonly_fields = ["date","time" , "image" , "thumbnail"]
    prepopulated_fields = {'slug': ('name',), }
    list_display = ["thumbnail" , "name" , "date"]
    def image(self, obj):
        return mark_safe('<img src="{url}" width="{width}" style="object-fit:cover;"/>'.format(
            url = obj.cover_image,
            width='70%',
            )
    )
    def thumbnail(self, obj):
        return mark_safe('<img src="{url}" width="{width}" height="{height}" style="object-fit:cover;border-radius:50%;"/>'.format(
            url = obj.cover_image,
            width='200',
            height='200',
            )
    )
    
@admin.register(Demographic)
class DemographicAdmin(admin.ModelAdmin):
    fieldsets = (
        ("Department", {
            "fields": (
                "department",
            ),
        }),
        ("Information" , {
            "fields":(
                "name","slug","image","cover_image","desc","date","time",
            ),
        }),
    )
    readonly_fields = ["date","time" , "thumbnail" , "image"]
    prepopulated_fields = {'slug': ('name',), }
    list_display = ["department" ,"thumbnail",  "name" , "date"]
    list_filter = ["department"]
    def image(self, obj):
        return mark_safe('<img src="{url}" width="{width}" style="object-fit:cover;"/>'.format(
            url = obj.cover_image,
            width='70%',
            )
    )
    def thumbnail(self, obj):
        return mark_safe('<img src="{url}" width="{width}" height="{height}" style="object-fit:cover;border-radius:50%;"/>'.format(
            url = obj.cover_image,
            width='200',
            height='200',
            )
    )


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    fieldsets = (
        ("Demographic", {
            "fields": (
                "demographic",
            ),
        }),
        ("Information" , {
            "fields":(
                "name","slug","image","cover_image","desc","date","time",
            ),
        }),
    )
    readonly_fields = ["date","time" , "thumbnail" , "image"]
    prepopulated_fields = {'slug': ('name',), }
    list_display = ["demographic" ,"thumbnail",  "name" , "date"]
    list_filter = ["demographic"]
    def image(self, obj):
        return mark_safe('<img src="{url}" width="{width}" style="object-fit:cover;"/>'.format(
            url = obj.cover_image,
            width='70%',
            )
    )
    def thumbnail(self, obj):
        return mark_safe('<img src="{url}" width="{width}" height="{height}" style="object-fit:cover;border-radius:50%;"/>'.format(
            url = obj.cover_image,
            width='200',
            height='200',
            )
    )
    
@admin.register(Company)
class CompanyAdmin(admin.ModelAdmin):
    fieldsets = (
        ("Categories", {
            "fields": (
                "category",
            ),
        }),
        ("Information" , {
            "fields" : (
                "full_name" , "short_name" , "logo","logo_url" ,"image" ,"cover_image" , "about",
            )
        }),
        ("Time" , {
            "fields" : (
                "date" , "time",
            )
        })

    )
    readonly_fields = ["date","time" , "thumbnail" , "image" , "logo"]
    list_display = ["logo" , "full_name" ,"thumbnail" ,"date"]
    def logo(self,obj):
        return mark_safe('<img src="{url}" width="{width}" height="{height}" style="object-fit:cover;border-radius:50%;"/>'.format(
            url = obj.logo_url,
            width='100',
            height='100',
            )
        )
   


    def image(self, obj):
        return mark_safe('<img src="{url}" width="{width}" style="object-fit:cover;"/>'.format(
            url = obj.cover_image,
            width='70%',
            )
    )
    def thumbnail(self, obj):
        return mark_safe('<img src="{url}" width="{width}" height="{height}" style="object-fit:cover;border-radius:50%;"/>'.format(
            url = obj.cover_image,
            width='200',
            height='200',
            )
    )



class InformationInline(admin.StackedInline):
    model = Information
    extra = 1

class DiscountOfferInline(admin.StackedInline):
    model = DiscountOffer
    extra = 1

class ReviewInline(admin.StackedInline):
    model = Review
    extra = 1
class QuestionInline(admin.StackedInline):
    model = Question
    extra = 1

class VariantInline(admin.StackedInline):
    model = Variant
    extra = 1




@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    

    def get_queryset(self,request):
        qs = super(ProductAdmin, self).get_queryset(request)
        if request.user.is_superuser:
            return qs
        return qs.filter(seller=request.user.seller)

    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "seller" and not request.user.is_superuser:
            kwargs["queryset"] = Seller.objects.filter(user=request.user)
        return super().formfield_for_foreignkey(db_field, request, **kwargs)


    
    inlines = [InformationInline,VariantInline,DiscountOfferInline,ReviewInline,QuestionInline]
    fieldsets = (
        ("Category", {
            "fields": (
                "category",
            ),
        }),
        ("Company", {
            "fields": (
                "company",
            ),
        }),
        ('Seller',{
            "fields":(
                "seller",
            ),
        }),
        ("Information" , {
            "fields":(
                "name","slug","description","warranty","support","trending"
            )
        }),
        ("Price" , {
            "fields":(
                "selling_price","market_price"
            )
        }),
        ("Time" , {
            "fields" : (
                "date" , "time",
            )
        })
    )
    readonly_fields = ["date","time"]
    prepopulated_fields = {'slug': ('name',), }
    list_filter = ['seller','category']

class ProductImagesInline(NestedTabularInline):
    model = ProductImage
    extra = 5

class SubletInline(NestedStackedInline):
    model = Sublet
    extra = 2
    inlines = [ProductImagesInline]




@admin.register(Variant)
class VariantAdmin(NestedModelAdmin):


    def formfield_for_foreignkey(self, db_field, request, **kwargs):
        if db_field.name == "product" and not request.user.is_superuser:
            kwargs["queryset"] = Product.objects.filter(seller=request.user.seller)
        return super().formfield_for_foreignkey(db_field, request, **kwargs)


    def get_queryset(self,request):
        qs = super(VariantAdmin, self).get_queryset(request)
        if request.user.is_superuser:
            return qs
        return qs.filter(product__seller=request.user.seller)
    inlines = [SubletInline,]
    fieldsets = (
        ("Product", {
            "fields": (
                "product",
            ),
        }),
        ("Information" , {
            "fields":(
                "label","desc",
            )
        })
    )
    list_display = ["product" , "label"]
    search_fields = ("product__name",)
    list_filter = ['product']





    
@admin.register(SpecialDeal)
class SpecialDealAdmin(admin.ModelAdmin):
    
    fieldsets = (
        ("Information", {
            "fields": (
               "image", "title","cover_image","desc"
            ),
        }),
        ("Products",{
            "fields":(
                "products",
            ),
        }),
        ("Settings",{
            "fields":(
                "discount_percentage","ending_date"
            ),
        }),
        ("Timestamp",{
            "fields":(
                "creation_date","creation_time"
            )
        }),
        ("Status",{
            "fields":(
                "has_expired",
            )
        })
        
    )
    readonly_fields = ["creation_date","creation_time" , "image" ,"has_expired"]
    list_display = ["thumbnail" ,"title" ,"ending_date","has_expired"]
    def image(self, obj):
        return mark_safe('<img src="{url}" width="{width}" height="{height}" style="object-fit:cover;"/>'.format(
            url = obj.cover_image,
            width='50%',
            height='50%'
            )
    )
    def thumbnail(self, obj):
        return mark_safe('<img src="{url}" width="{width}" height="{height}" style="object-fit:cover;border-radius:50%;"/>'.format(
            url = obj.cover_image,
            width='200',
            height='200',
            )
    )
    def has_expired(self,obj):
        style_expired = "background-color:red;color:white;padding:1em;font-weight:bold;text-align:center;"
        style_active = "background-color:green;color:white;padding:1em;font-weight:bold;text-align:center;"
        if(obj.has_expired):
            return mark_safe(f"<h4 style={style_expired}>Expired</h4>")
        return mark_safe(f"<p style={style_active}>Active</p>")


class SingleOrderInline(admin.StackedInline):
    def get_queryset(self,request):
        qs = super(SingleOrderInline, self).get_queryset(request)
        if request.user.is_superuser:
            return qs
        return qs.filter(sublet__variant__product__seller=request.user.seller)
    
    

    model = SingleOrder
    extra = 1
    fields = ("product","sublet","quantity","total","date","time")
    readonly_fields = ("product","date","time","total")

    def product(self,obj):
        return obj.get_product()


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    # def formfield_for_foreignkey(self, db_field, request, **kwargs):
    #     if db_field.name == 'customer' and request.user.is_superuser:
    #         return CustomerChoiceField(queryset=Customer.objects.all())
    #     return super().formfield_for_foreignkey(db_field, request, **kwargs)
    inlines = [SingleOrderInline,]
    fieldsets = (
        ("Customer", {
            "fields": (
               "customer",
            ),
        }),
        ("status",{
            "fields":(
                ("saved","ordered","confirmed","dispatched","delivered",),
            ),
        }),
        ("Deadline",{
            "fields":(
                "estimated_date","estimated_time"
            ),
        }),
        ("Total",{
            "fields":(
                "sum",
            ),
        }),
        ("Timestamp",{
            "fields":(
                "date","time"
            )
        }),
        
        
    )
    readonly_fields = ["date","time","sum"]
    list_display = ['sum' , "customer" , "date" , "time" ,]
    list_filter = ['date' , "confirmed" , "dispatched","delivered"]
    search_fields = ("customer__user__first_name","customer__user__last_name",)
    
# @admin.register(CanceledOrder)
# class CanceledOrderAdmin(admin.ModelAdmin):

#     fieldsets = (
#         ("Order",{
#             "fields" : (
#                 "order",
#             )
#         }),
#         ("Cancel",{
#             "fields" : (
#                 "cancel_confirmed","reason_for_cancel"
#             )
#         }),
#         ("Response From Picking Hub",{
#             "fields" : (
#                 "message_from_pickinghub",
#             )
#         }),
#         ("Timestamp",{
#             "fields" : (
#                 ("date","time"),
#             )
#         })
#     )
#     readonly_fields = ["date","time","reason_for_cancel"]
#     list_display = ['order', "get_customer", "date" , "time" ,]
#     list_filter = ['date' , "time" , "cancel_confirmed",]
#     search_fields = ("order","get_customer")


# @admin.register(ReturnOrder)
# class ReturnOrderAdmin(admin.ModelAdmin):

#     fieldsets = (
#         ("Single Order" , {
#             "fields" : (
#                 "single_order",
#             ),
#         }),

#     )