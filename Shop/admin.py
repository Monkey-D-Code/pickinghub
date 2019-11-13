from django.contrib import admin
from .models import *
from django.utils.safestring import mark_safe
# Register your models here.
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
    extra = 2
class QuestionInline(admin.StackedInline):
    model = Question
    extra = 2

class VariantInline(admin.StackedInline):
    model = Variant
    extra = 2


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
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
        ("Information" , {
            "fields":(
                "name","slug","description","warranty","support","trending"
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

class SubletInline(admin.StackedInline):
    model = Sublet
    extra = 2




@admin.register(Variant)
class VariantAdmin(admin.ModelAdmin):
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
    search_fields = ("product",)

class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 4


@admin.register(Sublet)
class SubletAdmin(admin.ModelAdmin):
    inlines = [ProductImageInline,]
    fieldsets = (
        ("Variant", {
            "fields": (
                "variant",
            ),
        }),
        ("Information",{
            "fields":(
                "color_hex","max_retail_price","selling_price","stock"
            )
        })
    )
    
