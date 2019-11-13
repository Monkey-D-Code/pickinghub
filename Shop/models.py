from django.db import models
from Accounts.models import Customer
from random import randrange
# Create your models here.


class Department(models.Model):
     name = models.CharField(max_length=150,unique=True)
     slug = models.SlugField()
     cover_image = models.URLField(max_length=400)
     desc = models.TextField()

     date = models.DateField(auto_now_add=True)
     time = models.TimeField(auto_now_add=True)

     def __str__(self):
         return self.name
     


class Demographic(models.Model):
    department = models.ForeignKey(Department , on_delete=models.CASCADE)
    name = models.CharField(max_length=150)
    slug = models.SlugField()
    cover_image = models.URLField(max_length=400)
    desc = models.TextField()

    date = models.DateField(auto_now_add=True)
    time = models.TimeField(auto_now_add=True)

    def __str__(self):
         return self.name

    @property
    def total_companies(self):
        companies = 0
        for category in self.category_set.all():
            companies += category.company_set.count()

        return companies

class Category(models.Model):
    demographic = models.ForeignKey(Demographic , on_delete=models.CASCADE)
    name = models.CharField(max_length=150)
    slug = models.SlugField()
    cover_image = models.URLField(max_length=400)
    desc = models.TextField()

    date = models.DateField(auto_now_add=True)
    time = models.TimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Categrories'

    def __str__(self):
         return self.name

    @property
    def total_products(self):
        products = 0
        for company in self.company_set.all():
            products += company.product_set.count()

        return products

    @property
    def all_products(self):
        return self.product_set.all()

class Company(models.Model):
    category = models.ManyToManyField(Category)
    full_name = models.CharField(max_length=50, unique=True)
    short_name = models.CharField(blank=True , max_length=150)
    logo_url = models.URLField(max_length=600)
    cover_image = models.URLField(blank=True , max_length=400)
    about = models.TextField()

    date = models.DateField(auto_now_add=True)
    time = models.TimeField(auto_now_add=True)

    class Meta:
        verbose_name_plural = 'Companies'

    def __str__(self):
         return self.full_name

class Product(models.Model):
    company = models.ForeignKey(Company, on_delete=models.CASCADE)
    category = models.ForeignKey(Category, on_delete=models.CASCADE , blank=True, null=True)
    name = models.CharField(max_length=250 , unique=True)
    slug = models.SlugField()
    description = models.TextField()
    trending = models.BooleanField(default=False)
    warranty = models.CharField(blank=True , max_length=120)
    support = models.CharField(blank=True , max_length=120)

    date = models.DateField(auto_now_add=True)
    time = models.TimeField(auto_now_add=True)

    def __str__(self):
         return self.name

    @property
    def variants(self):
        return self.variant_set.all()

    @property
    def informations(self):
        return self.information_set.all()
    @property
    def discountoffers(self):
        return self.discountoffer_set.all()
    @property
    def reviews(self):
        return self.review_set.all()

    @property
    def questions(self):
        return self.question_set.all()
        
    @property
    def random_product_image(self):
       if self.variant_set.count() > 0:
           return self.variant_set.all()[randrange(0 , self.variant_set.count())].random_variant_image


class Variant(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    label = models.CharField(max_length=150)
    desc = models.TextField()

    def __str__(self):
        return self.label
    @property
    def sublets(self):
        return self.sublet_set.all()

    @property
    def random_variant_image(self):
        if self.sublet_set.count() > 0:
            return self.sublet_set.all()[randrange(0 , self.sublet_set.count())].random_image
    
class Sublet(models.Model):
    variant = models.ForeignKey(Variant, on_delete=models.CASCADE)
    value = models.CharField(max_length=150)
    color_hex = models.CharField(max_length=6,blank=True,null=True)
    max_retail_price = models.DecimalField(max_digits=7, decimal_places=2)
    selling_price = models.DecimalField(max_digits=7, decimal_places=2)
    stock = models.IntegerField(blank=True)
    def __str__(self):
        return self.value
    @property
    def productimages(self):
        return self.productimage_set.all()
    @property
    def random_image(self):
        if self.productimage_set.count() > 0 :
            return self.productimage_set.all()[randrange(0 , self.productimage_set.count())].image_url
        return False

class ProductImage(models.Model):
    sublet = models.ForeignKey(Sublet , on_delete=models.CASCADE)
    image_url = models.URLField(max_length=700)
    caption = models.CharField(max_length=50)

    def __str__(self):
        return self.caption
    


class Information(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    label = models.CharField(max_length=50)
    details = models.TextField()
    image_url = models.URLField(max_length=400,blank=True,null=True)

    date = models.DateField(auto_now_add=True)
    time = models.TimeField(auto_now_add=True)

    def __str__(self):
        return self.label

class DiscountOffer(models.Model):
    product = models.ForeignKey(Product , on_delete=models.CASCADE)
    label = models.CharField(max_length=50)
    details = models.TextField()
    discount = models.DecimalField(max_digits=7, decimal_places=2)

    date = models.DateField(auto_now_add=True)
    time = models.TimeField(auto_now_add=True)

    def __str__(self):
        return self.label
    
class Tag(models.Model):
    product = models.ManyToManyField(Product)
    tag_text = models.CharField(max_length=50 , unique=True)

    date = models.DateField(auto_now_add=True)
    time = models.TimeField(auto_now_add=True)

    def __str__(self):
        return self.tag_text

class Review(models.Model):
    customer = models.ForeignKey(Customer , on_delete=models.CASCADE)
    product = models.ForeignKey(Product , on_delete=models.CASCADE)
    rating = models.IntegerField()
    comment = models.TextField()

    date = models.DateField(auto_now_add=True)
    time = models.TimeField(auto_now_add=True)

    def __str__(self):
        return str(self.product)

class Question(models.Model):
    customer = models.ForeignKey(Customer , on_delete=models.CASCADE)
    product = models.ForeignKey(Product , on_delete=models.CASCADE)
    question_text = models.TextField()

    date = models.DateField(auto_now_add=True)
    time = models.TimeField(auto_now_add=True)

    def __str__(self):
        return str(self.customer)